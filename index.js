const todoInput   = document.getElementById("todo_input");
const todoList    = document.getElementById("todo_list");
const emptyText   = document.getElementById("empty_text");
const buttonAdd   = document.getElementById("button_add");
const buttonUpdate = document.getElementById("button_update");
const statusInfo  = document.getElementById("status_info");

let selectedItem = null;


function updateEmptyMessage() {
  emptyText.style.display = todoList.children.length === 0 ? "block" : "none";
}


function updateStatus() {
  let completed = 0;
  let waiting = 0;

  [...todoList.children].forEach((li) => {
    const checkbox = li.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      completed++;
    } else {
      waiting++;
    }
  });

  statusInfo.textContent = `✔ Completed: ${completed} • ⌛ Waiting: ${waiting}`;
}


function updateIds() {
  [...todoList.children].forEach((li, index) => {
    const idSpan = li.querySelector(".todo_id");
    if (idSpan) {
      idSpan.textContent = `${index + 1}.`;
    }
  });
}

function buildItem(text) {
  const li = document.createElement("li");
  li.className = "todo_item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "5px";

  checkbox.addEventListener("change", () => {
    const textSpan = li.querySelector(".todo_text");
    if (checkbox.checked) {
      alert("Task completed! ✔");
      textSpan.classList.add("completed");
    } else {
      textSpan.classList.remove("completed");
    }
    updateStatus();
  });

 
  const idSpan = document.createElement("span");
  idSpan.className = "todo_id";
  idSpan.style.marginRight = "5px";


  const textSpan = document.createElement("span");
  textSpan.className = "todo_text";
  textSpan.textContent = text;

  const trashIcon = document.createElement("span");
  trashIcon.className = "trash_icon";
  trashIcon.textContent = "🗑️";

  trashIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (selectedItem === li) {
      selectedItem = null;
    }
    li.remove();
    todoInput.value = "";
    updateEmptyMessage();
    updateIds();
    updateStatus();
  });

  li.appendChild(checkbox);
  li.appendChild(idSpan);
  li.appendChild(textSpan);
  li.appendChild(trashIcon);

  li.addEventListener("click", () => {
    selectItem(li);
    const textSpan = li.querySelector(".todo_text");
    todoInput.value = textSpan.textContent;
    todoInput.focus();
  });

  return li;
}

function selectItem(li) {
  if (selectedItem) {
    selectedItem.classList.remove("selected");
  }
  selectedItem = li;
  selectedItem.classList.add("selected");
}

buttonAdd.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = buildItem(text);

  todoList.appendChild(li);
  todoInput.value = "";
  todoInput.focus();

  updateEmptyMessage();
  updateIds();
  updateStatus();
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    buttonAdd.click();
  }
});


buttonUpdate.addEventListener("click", () => {
  if (!selectedItem) return;

  const newText = todoInput.value.trim();
  if (newText === "") return;

  const textSpan = selectedItem.querySelector(".todo_text");
  if (textSpan) {
    textSpan.textContent = newText;
  }
});

updateEmptyMessage();
updateStatus();
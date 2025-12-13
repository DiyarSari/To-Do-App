const todoInput   = document.getElementById("todo_input");
const todoList    = document.getElementById("todo_list");
const emptyText   = document.getElementById("empty_text");
const buttonAdd   = document.getElementById("button_add");
const buttonUpdate = document.getElementById("button_update");
const statusInfo  = document.getElementById("status_info");

let selectedItem = null;
let isDisabled = true;
buttonAdd.disabled = true;
buttonUpdate.disabled = isDisabled;

function updateEmptyMessage() {
  emptyText.style.display = todoList.children.length === 0 ? "block" : "none";
}

function saveData() {
  let allTasks = [...todoList.children].map(li => {
    return li.querySelector(".todo_text").textContent;
  });

  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function loadData() {
  let saved = JSON.parse(localStorage.getItem("tasks")) || [];

  saved.forEach(text => {
    const li = buildItem(text);
    todoList.appendChild(li);
  });

  updateIds();
  updateEmptyMessage();
  updateStatus();
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
    checkbox.className = "todo_checkbox";

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

  const textSpan = document.createElement("span");
  textSpan.className = "todo_text";
  textSpan.textContent = text;

  const trashIcon = document.createElement("span");
  trashIcon.className = "trash_icon";
  trashIcon.textContent = "🗑️";

  trashIcon.addEventListener("click", (e) => {

    e.stopPropagation();
    let result = confirm("Do you want to Delete ❌");
    if (!result) return;

    if (selectedItem === li) {
    li.classList.remove("selected"); 
    selectedItem = null;
    todoInput.value = "";
    isDisabled = true;
    buttonUpdate.disabled = true;
  }

  li.remove();
  todoInput.value = "";
  buttonAdd.disabled = true;

  updateEmptyMessage();
  updateIds();
  updateStatus();
  saveData();
  });

  li.appendChild(checkbox);
  li.appendChild(idSpan);
  li.appendChild(textSpan);
  li.appendChild(trashIcon);

  li.addEventListener("click", (e) => {
    e.stopPropagation();
    selectItem(li);
    todoInput.value = textSpan.textContent;
    todoInput.focus();
  });
    isDisabled = true;
     document.getElementById("button_update").disabled = isDisabled; 
  return li;
}

function selectItem(li) {
  if (selectedItem) {
    selectedItem.classList.remove("selected");
  }
  selectedItem = li;
  selectedItem.classList.add("selected");
  isDisabled = false;
  buttonUpdate.disabled = isDisabled;
}

buttonAdd.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = buildItem(text);

  todoList.appendChild(li);
  todoInput.value = "";
  buttonAdd.disabled = true;
  todoInput.focus();

  updateEmptyMessage();
  updateIds();
  updateStatus();
  saveData();
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    buttonAdd.click();
  }
});

todoInput.addEventListener("input", () => {
  buttonAdd.disabled = todoInput.value.trim() === "";
});


buttonUpdate.addEventListener("click", () => {
  if (!selectedItem) return;

  const newText = todoInput.value.trim();
  if (newText === "") return;

  const textSpan = selectedItem.querySelector(".todo_text");
  if (textSpan) {
    textSpan.textContent = newText;
  }

  todoInput.value = "";
  buttonAdd.disabled = true;
  isDisabled = true;
  buttonUpdate.disabled = isDisabled;
  selectedItem.classList.remove("selected");
  selectedItem = null;
  saveData();

});

document.body.addEventListener("click", () => {
  if (selectedItem) {
    selectedItem.classList.remove("selected");
    selectedItem = null;
    isDisabled = true;
    buttonUpdate.disabled = isDisabled;
  }
});

todoInput.addEventListener("click", (e) => e.stopPropagation());
document.body.addEventListener("click", () => {
    if (!selectedItem) {
        todoInput.value = "";
    }
});


updateEmptyMessage();
updateStatus();
loadData();




    const todoInput= document.getElementById("todo_input")
    const todoList = document.getElementById("todo_list")
    const emptyText= document.getElementById("empty_text")
    const buttonAdd= document.getElementById("button_add")
    const buttonUpdate = document.getElementById("button_update")
    const buttonDelete = document.getElementById("button_delete")

    let selectedItem=null;

    function update_empty_message(){
        if(todoList.children.length === 0){
            emptyText.style.display = "block";
    }
        else  {
            emptyText.style.display = "none"
        }
    }

    function buildItem(text) {
    const li = document.createElement("li");
    li.className = "todo_item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "8px";

    const idSpan = document.createElement("span");
    idSpan.className = "todo_id";
    idSpan.style.marginRight = "8px";

    const textSpan = document.createElement("span");
    textSpan.className = "todo_text";
    textSpan.textContent = text;

    li.appendChild(checkbox); 
    li.appendChild(idSpan);   
    li.appendChild(textSpan); 

    return li;
    }

    function update_ids() {
    [...todoList.children].forEach((li, index) => {
        const idSpan = li.querySelector(".todo_id");
        if (idSpan) {
            idSpan.textContent = (index + 1) + ".";
        }
    });

    }

    });

    function selectItem(li) {
        if(selectedItem){
            selectedItem.classList.remove("selected");

        }
        selectedItem= li;
        selectedItem.classList.add("selected");
    }

    buttonAdd.addEventListener("click", function ()  {
        const text =todoInput.value.trim();
        if (text=== "")return;

        const li = document.createElement("li");
        li.textContent =text
        li.className ="todo_item";

        li.addEventListener("click", function () {
            selectItem(li);

        }
      );
      todoList.appendChild(li);
      todoInput.value = "";
      todoInput.focus();
      update_empty_message();
  });

  buttonUpdate.addEventListener("click", function() {
    if(!selectedItem) return;
    const newText = todoInput.value.trim();
    if(newText=== "")   return;
    selectedItem.textContent =newText;
  })

  buttonDelete.addEventListener("click", function() {
    if (!selectedItem) return;
    selectedItem.remove();
    todoInput.value ="";
    update_empty_message();
  });

  update_empty_message();


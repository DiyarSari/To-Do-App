
    const todoInput= document.getElementById("todo_input")
    const todoList = document.getElementById("todo_list")
    const emptyText= document.getElementById("empty_text")
    const buttonAdd= document.getElementById("button_add")
    const buttonUpdate = document.getElementById("button_update")
    const buttonDelete = document.getElementById("button_delete")

    function update_empty_message(){
        if(todoList.children.length === 0){
            emptyText.style.display = "block";
        }
        else {
            emptyText.style.display = "none"
        }
    }
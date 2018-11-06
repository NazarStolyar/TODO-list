function createTodoItem (titel) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    var lable = document.createElement('lable');
    lable.innerHTML = titel;
    lable.className = "title";

    var editInput = document.createElement('input');
    editInput.type = "text";
    editInput.className = "textfield";

    var editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.className = "edit";


    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";

    var listItem = document.createElement('li');
    listItem.className = "todo-item";

    listItem.appendChild(checkbox);
    listItem.appendChild(lable);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    bindIvents(listItem);
    return listItem;
}
function bindIvents (todoItem) {
    var checkbox = todoItem.querySelector(".checkbox");
    var editButton = todoItem.querySelector("button.edit");
    var deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem (event) {
    event.preventDefault();

    if (addInput.value === '') {
        return alert("Необхідно ввести задачу!!!")
    }

    var todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

function toggleTodoItem () {
    var listItem = this.parentNode;
    listItem.classList.toggle('completed')
}

function editTodoItem () {
    var listItem = this.parentNode;
    var title = listItem.querySelector('.title');
    var editInput = listItem.querySelector('.textfield');
    var isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerHTML = editInput.value;
        this.innerHTML = "Edit";
    } else {
        editInput.value = title.innerHTML;
        this.innerHTML = "Save";
    }

    listItem.classList.toggle("editing");
}

function deleteTodoItem () {
    var listItem = this.parentNode;
    todoList.removeChild(listItem);
}

var todoForm = document.getElementById('todo-form');
var addInput = document.getElementById('add-input');
var todoList = document.getElementById('todo-list');
var todoItem = document.querySelectorAll('.todo-item');


function main () {
    todoForm.addEventListener('submit', addTodoItem);
    todoItem.forEach(item => bindIvents(item));
}

main();

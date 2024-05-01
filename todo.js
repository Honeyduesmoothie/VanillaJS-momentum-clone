const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo-input");

function displayTodo(object){
    const li = document.createElement("li");
    li.id = object.id;
    const span = document.createElement("span")
    span.textContent = object.text;
    const removeTodoBtn = document.createElement("button")
    removeTodoBtn.textContent = "X"
    li.appendChild(span);
    li.appendChild(removeTodoBtn);
    todoList.appendChild(li)
    todoInput.value = "";
    removeTodoBtn.addEventListener("click", deleteTodo)
}

let todos = [];

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(e){
    li = e.target.parentNode;
    todos = todos.filter((object) => object.id !== Number(li.id))
    saveTodo();
    li.remove();
}

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    value = todoInput.value;
    const todoObject = {
        id: Date.now(),
        text: value,
    }
    todos.push(todoObject)
    displayTodo(todoObject);
    saveTodo();
})

const savedTodos = localStorage.getItem("todos")

if(savedTodos){
    todos = JSON.parse(savedTodos)
    todos.forEach(object => {
        displayTodo(object);
    });
}
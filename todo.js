const todoForm = document.querySelector(".todo-form");
const list = document.querySelector(".list");
const todos = document.querySelector("#todos")
const todo = document.querySelector(".todo")
const check = document.querySelector("#check");
const menuBtn = document.querySelector(".menuBtn");
const clearList = document.querySelector(".clear-list")
const edit = document.querySelector(".edit")
const menu = document.querySelector(".menu");

window.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("todo")){
        loadList()
    }
})

window.addEventListener("click", ()=>{
    if (!todos.value == "") {
        saveList()
        todos.value = "";
    }
})

check.addEventListener("input", ()=>{
    todo.classList.toggle("checked")
})


menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
}
)

clearList.addEventListener("click", ()=>{
    localStorage.removeItem("todo");
    showTodoForm();
})

function loadList(){
    item = localStorage.getItem("todo");
    showList();
    todo.textContent = item;
}

function saveList(){
    value = todos.value
    localStorage.setItem("todo", value);
    showList();
    todo.textContent = value;
}



function showTodoForm(){
    todoForm.classList.remove("hidden");
    list.classList.add("hidden")
}

function showList(){
    todoForm.classList.add("hidden");
    list.classList.remove("hidden");
    
}
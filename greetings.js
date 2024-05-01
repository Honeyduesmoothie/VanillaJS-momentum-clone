const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDE = "hidden"
const USERNAME = "username"



loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    value = loginInput.value;
    localStorage.setItem(USERNAME, value);
    hideForm();
    showGreeting();
})

window.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem(USERNAME)){
        hideForm();
        showGreeting()
    } else {
        showForm();
    }
})

function hideForm(){
    loginForm.classList.add(HIDE);
}

function showForm(){
    loginForm.classList.remove(HIDE);
}

function showGreeting(){
    storedName = localStorage.getItem(USERNAME)
    greeting.classList.remove(HIDE)
    greeting.textContent = `Hello ${storedName}!`
}

function hideGreeting(){
    greeting.classList.add(HIDE);
}
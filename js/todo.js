const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
//자주쓰는 string 


let Todoarray =[];
//빈 array 생성


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(Todoarray));
}
//로컬에 string으로 array 저장 


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}
// todo 삭제 


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText =newTodo.text;

    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
//todo 그리기 


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    Todoarray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos !== null){
    const parsedToDos = JSON.parse(saveTodos);
        Todoarray = parsedToDos;
    parsedToDos.forEach(paintTodo);
}


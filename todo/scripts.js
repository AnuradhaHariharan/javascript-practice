document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector(".todo-input");
  const todoInputBox = document.querySelector(".todo-input-box");
  const submitbtn = document.querySelector(".submit-btn");
  const todoList = document.querySelector(".todo-items");
  let isUpdate = false;
  let updatedTodo = null;

  todoInput.addEventListener("submit", (event) => {
    event.preventDefault();
    todoItem = todoInputBox.value.trim();

    if (todoItem) {
      if (isUpdate === true) {
        updatedTodo.firstChild.innerText = todoItem;
        isUpdate=false;
        updatedTodo=null;
        submitbtn.innerText="submit";
        todoInputBox.value = "";
      } else {
        createTodoList(todoItem);
        todoInputBox.value = "";
      }
    } else {
      alert("Enter valid todo item");
    }
  });

  todoList.addEventListener("click", (event) => {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      let parentNode = element.parentElement;
      if (element.innerText === "❌") {
        element.parentNode.remove();
      }
      if (element.innerText === "✏️") {
        isUpdate = true;
        updatedTodo = parentNode;
        submitbtn.innerText = "update";
        todoInputBox.select();
        todoInputBox.value = parentNode.firstChild.innerText;
      }
    }
  });

  const createTodoList = (todoItem) => {
    const todo = document.createElement("li");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    todo.innerHTML = `<span>${todoItem}</span>`;
    edit.innerText = `✏️`;
    remove.innerText = `❌`;

    todo.appendChild(edit);
    todo.appendChild(remove);
    todoList.appendChild(todo);
  };
});

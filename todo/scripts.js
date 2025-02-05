document.addEventListener("DOMContentLoaded", () => {

    let todo_input = document.getElementById("to-do-input");
    let submit_btn = document.getElementById("submit-btn");
    let clear_btn = document.getElementById("clear");

    const createList = (text) => {
        let parent = document.getElementById("todo-list-box"); // outer container of all todos

        let listBox = document.createElement("div"); // box containg a todo, checkbox , delete
        listBox.classList.add("list-box")
        parent.appendChild(listBox);

        let deleteIcon = document.createElement("p");
        deleteIcon.innerText = "X";
        deleteIcon.classList.add("delete-list")
        listBox.append(deleteIcon);

        let checkBox = document.createElement("input"); // checkbox for tasks completed or not
        checkBox.type = "checkbox"
        checkBox.classList.add("checkbox")
        listBox.append(checkBox);
         
        if (text.isChecked === true) {
            checkBox.checked = true;
        }

        let list = document.createElement("h2"); //lists on todo 
        list.classList.add("todo-list")
        listBox.append(list);

        if (text.isChecked){
            checkBox.checked=true
            list.style.textDecoration="line-through"
        }
        deleteIcon.addEventListener("click", () => {
            deleteIcon.parentElement.remove();
            let localData= localStorage.getItem("todo");
            let data =localData?JSON.parse(localData):[];
            let arr=data.filter(data=>data.text!==list.innerText)
            localStorage.setItem("todo",JSON.stringify(arr))
        });

            checkBox.addEventListener("change", () => {
            let localData = localStorage.getItem("todo");
            let data = localData ? JSON.parse(localData) : []; 
            data.forEach((item) => {
                if (item.text === list.innerText) { 
                    item.isChecked = checkBox.checked; 
                }
            });
            localStorage.setItem("todo", JSON.stringify(data));
            list.style.textDecoration = checkBox.checked ? "line-through" : "none";
        });

        list.innerText = text.text;
    }
    const onSubmit = () => {
        let localdata = localStorage.getItem("todo")
        let list_arr = [];
        try {
            list_arr = localdata ? JSON.parse(localdata) : [];
        } catch (error) {
            list_arr = [];
        }

        let todo_item = todo_input.value;
        let listInfo = {
            text: todo_item,
            isChecked: false
        }
        if (listInfo.text !== "") { list_arr.push(listInfo); }
        console.log(list_arr)
        localStorage.setItem("todo", JSON.stringify(list_arr))
        document.getElementById("todo-list-box").innerHTML = '';

        if (list_arr.length > 0) {
            list_arr.forEach((item) => {
                createList(item);
            })
        }
    }
    const onClear = () => {
        localStorage.removeItem("todo");
        document.getElementById("todo-list-box").innerHTML = '';
    }

    submit_btn.addEventListener("click", onSubmit);
    clear_btn.addEventListener("click", onClear);
    window.onload = onSubmit;


})
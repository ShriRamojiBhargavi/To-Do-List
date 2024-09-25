const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let editableTask = null;

function addTasks() {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        if (editableTask) {
            editableTask.firstChild.textContent = inputBox.value;
            editableTask = null;
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            let edit = document.createElement("edit");
            edit.innerHTML = "\u270E";
            li.appendChild(edit);
            listContainer.appendChild(li);
        }
    inputBox.value = "";
    saveData();
    }
}

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
        else if (e.target.tagName === "EDIT") {
            //var update = document.getElementById();
            //update.setAttribute(inputBox.value);
            inputBox.value = e.target.parentElement.firstChild.textContent; // Get the task text into the input field
            editableTask = e.target.parentElement;
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();



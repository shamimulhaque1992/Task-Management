// Selecting all the elements and assign them to a variable

let newtask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoul = document.querySelector("#items");
let compleatul = document.querySelector(".complete-list ul");




// All needed functionalities


let createTask = function (task) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    label.innerText = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newtask.value);
    todoul.appendChild(listItem);
    newtask.value = "";
    afterclickcheckbox(listItem, completeTask);

}



let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    compleatul.appendChild(listItem);
    afterclickdelete(listItem, deleteTask);

}


let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let afterclickcheckbox = function (taskItem, checkboxclick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}



let afterclickdelete = function (taskItem, deletebtnclick) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deletebtnclick;
}

for(let i=0; i<todoul.children.length;i++){
    afterclickcheckbox(todoul.children[i],completeTask);
}

for(let i=0; i<compleatul.children.length;i++){
    afterclickdelete(compleatul.children[i],deleteTask);
}
form.addEventListener('submit', addTask);
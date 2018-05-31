/*
- makeTask function
- taskDone function
- store tasks in localStorage
- some CSS styling
*/

let newTasks = [];
let doneTasks = [];

let buttonAdd = document.getElementById("buttonAdd");
let buttonDone = document.getElementById("buttonDone");

let listOl = document.getElementById("listOl");

function makeTask() {
  let newTask = prompt("What's your new task?");
  newTasks.push(newTask);
};

function taskDone() {
  let taskToDelete = prompt("Which task did you complete?");
  let taskToDeleteInt = parseInt(taskToDelete);

  function checkOffItem(element, index) {
    let hey = newTasks.splice(index+1, 1);
    doneTasks.push(hey);
  };

  newTasks.forEach(checkOffItem);
};

function displayTasks() {
  for (var i = 0; i < newTasks.length; i++) {
    let newLi = document.createElement("li");
    listOl.appendChild(newLi);
    newLi.innerText = newTasks[i];
  };
};

buttonAdd.addEventListener("click", function() {
  makeTask();

  while (listOl.hasChildNodes()) {
    listOl.removeChild(listOl.firstChild)
  };

  displayTasks();
});

buttonDone.addEventListener("click", function() {
  taskDone();

  while (listOl.hasChildNodes()) {
    listOl.removeChild(listOl.firstChild)
  };

  displayTasks();
});

























//

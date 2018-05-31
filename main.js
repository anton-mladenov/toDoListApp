/*
- makeTask function
- taskDone function
- store tasks in localStorage
- some CSS styling
*/


let newTasks = [];
let doneTasks = [];

let buttonAdd = document.getElementById("buttonAdd");
let buttonDone = document.getElementById("buttonDelete");

let listOl = document.getElementById("listOl");

function makeTask() {
  let newTask = prompt("What's your new task?");
  newTasks.push(newTask);
};

function taskDone() {
  let taskToDelete = parseInt(prompt("Which task did you complete?"));
  function findTask(x) {
    return x === refNr;
  };

  let gimme = products.find(findProduct);
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



























//

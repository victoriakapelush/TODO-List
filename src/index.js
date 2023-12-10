const section = document.getElementById('section');
const inputValue = document.getElementById('text');
const btnDel = document.getElementsByClassName('btnDel');

const taskArray = [];

getFromLocalStorage();

//add tasks to the array once "enter" is pressed
inputValue.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    showTask();
    taskArray.push(inputValue.value);
    this.value = "";
  }
  addToLocalStorage();
});

//display every single enetred task on the screen
function showTask() {
  const div = document.createElement('div');
  section.appendChild(div);
  div.setAttribute('class', 'tasks');
  //create buttons with ticks
  const btnDel = document.createElement('button');
  btnDel.setAttribute('class', 'btnDel');
  section.appendChild(btnDel);
  btnDel.textContent = "X";
  div.textContent = inputValue.value;
}

function addToLocalStorage(task) {
  // conver the array to string then store it.
if (taskArray.length === 0) return;
  localStorage.setItem('task', JSON.stringify(taskArray));
}

//get everything from local storage
function getFromLocalStorage() {
  let item = localStorage.getItem('task');
  if (item === undefined || item === null) return;
    
  tasks = JSON.parse(localStorage.getItem('task'))

  for (let i = 0; i < tasks.length; i++) {
	  const div = document.createElement('div');
	  section.appendChild(div);
	  div.setAttribute('class', 'tasks');
	  //create buttons with ticks
	  const btnDel = document.createElement('button');
	  btnDel.setAttribute('class', 'btnDel');
	  section.appendChild(btnDel);
	  btnDel.textContent = "X";
	  div.textContent = tasks[i];

//remove a single item from local storage and display the ones left
    btnDel.addEventListener('click', function() {
        taskArray.shift();
        div.remove();
        btnDel.remove();
        localStorage.setItem('task', JSON.stringify(taskArray));
    })
  }

//add new items to the existing array in local storage
  if (localStorage.length !== 0) {
    for (let i = 0; i < tasks.length; i++) {
      let newTaskArray = taskArray.push(tasks[i]);
      console.log(newTaskArray)
    }
  }
}



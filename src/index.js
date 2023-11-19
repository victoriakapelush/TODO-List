/*const Tasks = [];

const section = document.getElementById('section');
const inputValue = document.getElementById('text');

//add tasks to the array once "enter" is pressed
inputValue.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addTask();
      Tasks.push(inputValue.value);
      this.value = "";
    }
    addToLocalStorage();
});

function addToLocalStorage(task) {
    // conver the array to string then store it.
    localStorage.setItem('task', JSON.stringify(Tasks));
  }

  // function helps to get everything from local storage
function getFromLocalStorage() {
        const reference = JSON.parse(localStorage.getItem('task'))

for (let i = 0; i < reference.length; i++) {
  const div = document.createElement('div');
  section.appendChild(div);
  div.setAttribute('class', 'tasks-box');
  const div1 = document.createElement('div');
  div.appendChild(div1);
  div1.setAttribute('class', 'tasks');
   //create buttons with ticks
  const btnDel = document.createElement('button');
  btnDel.setAttribute('class', 'btnDel');
  div.appendChild(btnDel);
  btnDel.textContent = "X";
  div1.textContent = reference[i];

          btnDel.addEventListener("click", function() {
            for (let i = 0; i < reference.length; i++) {
            div.remove();
            localStorage.removeItem('task');
            const Tasks = [];
            
            Tasks.push(section.textContent);
            localStorage.setItem('task', JSON.stringify(Tasks));
            
            }  
          })

        }}
    


  // initially get everything from localStorage
getFromLocalStorage();

function addTask() {
    const div = document.createElement('div');
    section.appendChild(div);
    div.setAttribute('class', 'tasks-box');
    const div1 = document.createElement('div');
    div.appendChild(div1);
    div1.setAttribute('class', 'tasks');
     //create buttons with ticks
    const btnDel = document.createElement('button');
    btnDel.setAttribute('class', 'btnDel');
    div.appendChild(btnDel);
    btnDel.textContent = "X";
    div1.textContent = inputValue.value;    
}*/


const tasks = [];

const section = document.getElementById('section');
const inputValue = document.getElementById('text');

//add tasks to the array once "enter" is pressed
inputValue.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      showTask();
      tasks.push(inputValue.value);
      this.value = "";
    }
    addToLocalStorage();
});

function addToLocalStorage(task) {
    // conver the array to string then store it.
	if (tasks.length === 0) return;
    localStorage.setItem('task', JSON.stringify(tasks));
  }

  // function helps to get everything from local storage
function getFromLocalStorage() {
	let item = localStorage.getItem('task');
	if (item === undefined || item === null) return;
	
	tasks = JSON.parse(localStorage.getItem('task'))
	console.log(tasks)

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

	  btnDel.addEventListener("click", function() {
		for (let i = 0; i < tasks.length; i++) {
		  div.remove();
		  btnDel.remove();
		  localStorage.removeItem('task');
		}  
	  })

	}
}
    


  // initially get everything from localStorage
getFromLocalStorage();

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




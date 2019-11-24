//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listers
loadEventListeners();

//Load all event Listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
}
// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-times"></i>';
  //append the link  to link
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);
  console.log('OUTPUT: addTask -> taskList', taskList);

  //clear input
  taskInput.value = '';

  e.preventDefault();
}

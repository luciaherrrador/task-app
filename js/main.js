'use strict';

const taskList = [];

const elementButton = document.querySelector('#new-task-button');
const elementInput = document.querySelector('#new-task-input');
const elementUlList = document.querySelector('#list-container');

function addNewTaskHandler(){
  createNewTask();
}

const createNewTask = () => {
  if(elementInput.value.length !== 0){
    taskList.push(elementInput.value);
    addLiElement();
  } else{
    alert('introduce una tarea')
  }
}

const addLiElement = () => {
  const liElement = document.createElement('li');

  liElement.innerHTML = `<span>${elementInput.value}</span><button type='button' class='remove-task-button'>Borrar Tarea</button>`;
  elementUlList.appendChild(liElement);

  const elementRemoveButtons = document.querySelectorAll('.remove-task-button');

  for (let elementRemoveButton of elementRemoveButtons){
    elementRemoveButton.addEventListener('click',removeTaskHandler)
  }
}

function removeTaskHandler(event) {
  event.target.closest('li').remove();
  const elementSelected = event.target.previousElementSibling.innerHTML;
  const indexOfElement = taskList.indexOf(elementSelected);

  if(indexOfElement !== -1){
    taskList.splice(indexOfElement,1)
  }
}

elementButton.addEventListener('click',addNewTaskHandler);
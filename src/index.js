import './style.css';
import { updateLocalStorage, markComplete } from './modules/intra.js';

const myTodoList = () => {
  let saveList;
  try {
    const savedData = localStorage.getItem('saveList');
    saveList = JSON.parse(savedData) || [];
  } catch (error) {
    saveList = [];
  }

  const list = document.getElementById('listItem');
  const clearComplete = document.getElementById('clearButton');

  const removeTask = (index, listElement) => {
    if (index >= 0 && index < saveList.length) {
      const taskContainers = document.querySelectorAll('.taskContainer');
      if (taskContainers[index]) {
        const ellipsisIcon = taskContainers[index].querySelector('.fas.fa-ellipsis-v');
        if (ellipsisIcon) {
          ellipsisIcon.classList.remove('fa-ellipsis-v');
          ellipsisIcon.classList.add('fa-trash-alt');
          ellipsisIcon.addEventListener('click', () => {
            saveList.splice(index, 1);
            saveList.forEach((task, newIndex) => {
              task.index = newIndex + 1;
            });
            updateLocalStorage(saveList);
            listElement();
          });
        }
      }
    }
  };

  const editTask = (index, taskElement) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskElement.innerText;

    const saveEditedTask = (index, inputElement) => {
      const updatedDescription = inputElement.value.trim();
      if (updatedDescription) {
        saveList[index].description = updatedDescription;
        updateLocalStorage(saveList);
      }
    };

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        saveEditedTask(index, input);
      }
    });

    taskElement.parentNode.replaceChild(input, taskElement);
    input.focus();
  };

  const listElement = () => {
    list.innerHTML = '';

    saveList.forEach((task, index) => {
      const completeTask = document.createElement('li');
      completeTask.className = 'taskContainer';

      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.checked = task.complete;

      const taskDescription = document.createElement('p');
      taskDescription.innerText = task.description;
      if (task.complete) {
        taskDescription.style.textDecoration = 'line-through';
      }
      taskDescription.addEventListener('click', () => {
        editTask(index, taskDescription);
      });

      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.className = 'fas fa-ellipsis-v';
      ellipsisIcon.addEventListener('click', () => {
        removeTask(index, listElement);
      });

      completeCheckbox.addEventListener('change', (event) => {
        markComplete(index, event.target.checked);

        if (event.target.checked) {
          taskDescription.style.textDecoration = 'line-through';
        } else {
          taskDescription.style.textDecoration = 'none';
        }
      });

      completeTask.appendChild(completeCheckbox);
      completeTask.appendChild(taskDescription);
      completeTask.appendChild(ellipsisIcon);
      list.appendChild(completeTask);
    });
  };

  const clearCompletedTasks = () => {
    const saveLists = JSON.parse(localStorage.getItem('saveList')) || [];

    saveList = saveLists.filter((task) => !task.complete);
    updateLocalStorage(saveList);
    listElement();
  };

  clearComplete.addEventListener('click', clearCompletedTasks);

  const addNewElement = (event) => {
    event.preventDefault();
    const input = document.getElementById('userInput');
    const description = input.value.trim();

    if (description) {
      const newTask = {
        index: saveList.length + 1,
        description,
        complete: false,
      };

      saveList.push(newTask);
      updateLocalStorage(saveList);
      listElement();
      input.value = '';
    }
  };

  const addButton = document.getElementById('add');
  addButton.addEventListener('click', addNewElement);

  window.addEventListener('load', () => {
    listElement();
  });
};

document.addEventListener('DOMContentLoaded', myTodoList);
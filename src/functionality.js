const myTodoList = () => {
  let saveList = JSON.parse(localStorage.getItem('saveList')) || [];
  const list = document.getElementById('listItem');
  const clearComplete = document.getElementById('clearButton');

  const updateLocalStorage = () => {
    localStorage.setItem('saveList', JSON.stringify(saveList));
  };

  const removeTask = (index) => {
    if (index >= 0 && index < saveList.length) {
      saveList.splice(index, 1);
      saveList.forEach((task, newIndex) => {
        task.id = newIndex;
      });
      updateLocalStorage();
    }
  };

  const markComplete = (index, complete) => {
    if (index >= 0 && index < saveList.length) {
      saveList[index].complete = complete;
      updateLocalStorage();
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
        updateLocalStorage();
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

  function listElement() {
    list.innerHTML = '';

    saveList.forEach((task, index) => {
      const completeTask = document.createElement('li');
      completeTask.className = 'taskContainer';

      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.checked = task.complete;
      completeCheckbox.addEventListener('change', (event) => {
        markComplete(index, event.target.checked);
      });

      const taskDescription = document.createElement('p');
      taskDescription.innerText = task.description;
      taskDescription.addEventListener('click', () => {
        editTask(index, taskDescription);
      });

      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.className = 'fas fa-ellipsis-v';
      ellipsisIcon.addEventListener('click', () => {
        removeTask(index);
      });

      completeTask.appendChild(completeCheckbox);
      completeTask.appendChild(taskDescription);
      completeTask.appendChild(ellipsisIcon);
      list.appendChild(completeTask);
    });

    const clearCompletedTasks = () => {
      saveList = saveList.filter((task) => !task.complete);
      updateLocalStorage();
      listElement();
    };
    clearComplete.addEventListener('click', () => {
      clearCompletedTasks();
    });
  }

  const addNewElement = (event) => {
    event.preventDefault();
    const input = document.getElementById('userInput');
    const description = input.value.trim();

    if (description) {
      const newTask = {
        id: saveList.length,
        description,
        complete: false,
      };

      saveList.push(newTask);
      updateLocalStorage();
      listElement();
      input.value = '';
    }
  };

  window.addEventListener('load', () => {
    const addButton = document.getElementById('add');
    listElement();
    addButton.addEventListener('click', addNewElement);
  });
};

export default myTodoList;
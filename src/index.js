import './style.css';

const listItem = document.getElementById('listItem');
const clearBtn = document.getElementsByClassName('clearBtn');
const addIcon = document.getElementById('addIcon');
const addInput = document.getElementById('addInput');
const todoList=() =>{
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const storedTask =()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  const addTask=(description) =>{
    const newTask ={
      description: description,
      completed: false,
      index: tasks.length+1,
    }
    tasks.push(newTask);
    storedTask();
    location.reload();
  };
  const removeTasks =(index) => {
tasks= tasks.filter((task) => task.index !== index);
storedTask();
location.reload();
  };
  const listTasks =() =>{
    listItem.innerHTML ='';
  tasks.forEach((task) => {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  const ellipsisIcon = document.createElement('i');
      ellipsisIcon.className = 'fas fa-ellipsis-v';
      ellipsisIcon.addEventListener('click',() =>{
        removeTasks(task.index);

      })
      taskElement.appendChild(ellipsisIcon);
    listItem.appendChild(taskElement);

    });
    
  }
  listTasks();
  addIcon.addEventListener('click',(event) =>{
    event.preventDefault();
    const description = addInput.value.trim();
    addTask(description);
  });

 
  
}
todoList();







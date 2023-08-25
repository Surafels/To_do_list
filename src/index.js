import './style.css';

const listItem = document.getElementById('listItem');
const clearBtn = document.getElementsByClassName('clearBtn');
const addIcon = document.getElementById('addIcon');
const addInput = document.getElementById('addInput');
const todoList=() =>{
  let tasks = JSON.parse(localStorage.getItem(tasks)) || [];
  const storedTask =()=>{
    localStorage.setItem(storedTask, JSON.stringify(tasks));

  }

  const addTask=(description) =>{
    const newTask ={
      description: description,
      completed: false,
      index: tasks.length+1,
    }
    tasks.push(newTask);
    storedTask()
    console.log('new task add', newTask);
    console.log("tasks", tasks);
  };
  addIcon.addEventListener('click',(event) =>{
    event.preventDefault();
    const description = addInput.value;
    addTask(description);
  });
  
}
todoList();







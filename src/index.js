import './style.css';

const myTodoList =() =>{
const tasks =Json.parse(localStorage.getItem('tasks')) || [];
const storedTasks =()=> { ('tasks', JSON.stringify(tasks));
}
const myNodelist = document.getElementsByTagName('LI');
for (let i=0; i<myNodelist.length; i++){
  const span = document.createElement('i');
  span.className = 'fas fa-ellipsis-v';
  myNodelist[i].appendChild(span);
}
}
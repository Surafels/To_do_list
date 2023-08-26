import './style.css';

const myTodoList =() =>{
const tasks =Json.parse(localStorage.getItem('tasks')) || [];
const storedTasks =()=> { ('tasks', JSON.stringify(tasks));
}
}
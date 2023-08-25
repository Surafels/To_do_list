import './style.css';
const addList = [
  {
    description: 'wash the dish',
    completed: true,
    index: 1,
  },
  {
    description: 'clean the dish',
    completed: true,
    index: 2,
  },
  {
    description: 'complete to do list project',
    completed: true,
    index: 3,
  },
]

function doListProject(){
  const list =document.getElementById('listItem');
addList.forEach((todo) => {
  const div = document.createElement('div');
  div.className = 'listElement';
  const description = document.createElement('p');
  description.innerHTML = todo.description;
  const completeTasks = document.createElement('div');
  completeTasks.className = 'completeTasks';
  const adBtn = document.createElement('button');
  completeTasks.appendChild(adBtn);
  adBtn.innerText ='Complete'
  adBtn.className = 'adBtn';
  const remove = document.createElement('button');
  remove.className = 'removeBtn';
  remove.innerText ='Remove';

  div.appendChild(completeTasks);
  div.appendChild(description);
  div.appendChild(remove);
  list.appendChild(div);
});
}
document.addEventListener('DOM ContentLoad', doListProject);  

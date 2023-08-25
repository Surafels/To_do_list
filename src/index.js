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
];

function doListProject() {
  const list = document.getElementById('listItem');
  addList.forEach((todo) => {
    const div = document.createElement('div');
    div.className = 'taskContainer';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    const description = document.createElement('p');
    description.innerHTML = todo.description;

    const ellipsisIcon = document.createElement('i');
    ellipsisIcon.className = 'fas fa-ellipsis-v';

    div.appendChild(checkbox);
    div.appendChild(description);
    div.appendChild(ellipsisIcon);
    list.appendChild(div);
  });
}
document.addEventListener('DOMContentLoaded', doListProject);

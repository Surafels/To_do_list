import './style.css';
const list =document.getElementById('listItem');
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

const itemList = function(){
  list.innerHTML = '';
  addList.forEach((item) =>{
    list.innerHTML += `
    <div class="ad-list">
    <input type="checkbox" />
    <p>${item.description}</p>
    </div>

    `
  });
};

window.addEventListener('load',itemList );

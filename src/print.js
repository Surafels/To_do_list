
const todoList = [
  {
    description: 'wash the dish',
    completed: true,
    index: 0,
  },
  {
    description: 'clean the dish',
    completed: true,
    index: 1,
  },
  {
    description: 'complete to do list project',
    completed: true,
    index: 2,
  },
]
function addList(){
  const mylist = document.getElementById('listItem');
  const listElements = todoList.map((todo) =>{
    const div = document.createElement('div');
    div.className ='listElement';
    const description = document.createElement('p');
    description.innerText =todo.description;
    
    const completed = document.createElement('div');
    completed.innerText =todo.completed;
    const clearBtn = document.createElement('button');
    clearBtn.innerText = 'Clear';

    div.appendChild(description);
    div.appendChild(completed);
    div.appendChild(clearBtn);

    return div;

  });
  mylist.append(...listElements);
}

export {addList};
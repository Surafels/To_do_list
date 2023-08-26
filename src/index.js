import './style.css';
const newElement = (tasks) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const li = document.createElement('li');
  const inputValue = document.getElementById('ad-input').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Please write something!');
  } else {
    document.getElementById('ulList').appendChild(li);
  }
  document.getElementById('ad-input').value = '';
  const span = document.createElement('i');
  span.className = 'fas fa-ellipsis-v';
  li.appendChild(span);
  span.onclick = function() {
    const listItem = this.parentElement;
    listItem.style.display = 'none';
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);
    tasks.splice(index, 1);
    storedTasks();
  };
  tasks.push(inputValue);
  storedTasks();
};
const storedTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const myTodoList = () => {
  // let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  
  

  const myNodelist = document.getElementsByTagName('LI');
  for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement('i');
    span.className = 'fas fa-ellipsis-v';
    myNodelist[i].appendChild(span);
  }

  const ellipsisIcon = document.querySelectorAll('.fas.fa-ellipsis-v');
  ellipsisIcon.forEach(function(icon) {
    icon.onclick = function() {
      const listItem = this.parentElement;
      listItem.style.display = 'none';
      const index = Array.from(listItem.parentNode.children).indexOf(listItem);
      tasks.splice(index, 1);
      storedTasks();
    };
  });

  const list = document.querySelector('ul');
  list.addEventListener(
    'click',
    function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
      tasks = Array.from(list.children).map(function(item) {
        return item.innerText;
      });
      storedTasks();
    },
    false
  );

  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', newElement);

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    const t = document.createTextNode(task);
    li.appendChild(t);

    const span = document.createElement('i');
    span.className = 'fas fa-ellipsis-v';
    li.appendChild(span);

    span.onclick = function() {
      const listItem = this.parentElement;
      listItem.style.display = 'none';
      const index = Array.from(listItem.parentNode.children).indexOf(listItem);
      tasks.splice(index, 1);
      storedTasks();
    };
    document.getElementById('ulList').appendChild(li);
  });
};

myTodoList();
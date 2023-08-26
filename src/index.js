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
const ellipsisIcon=document.querySelectorAll('.fas.fa-ellipsis-v');
ellipsisIcon.forEach(function(icon) {
icon.onclick =function() {
  const listItem =this.parentElement;
  listItem.style.display = 'none';
  tasks.splice(i,1);
  storedTasks();
};
});

const list = document.querySelector('ul');
list.addEventListener('click', function(e){
if(e.target.tagName === 'LI'){
  e.target.classList.toggle('checked')
}
tasks = Array.from(list.children).map(function(item){
  return item.innerText;
});
storedTasks();
}, false);

function newElement(){
  const li = document.createElement('li');
  constninputValue =document.getElementById('ad-input').value;
  const t = document.createTextNode('inputValue');
  li.appendChild(t);
  if(inputValue === ''){
    alert('Please write something!');
  } else{
    document.getElementById('ulList').appendChild(li);

  }
  document.getElementById('ad-input').value = "";
  const span = document.createElement('i');
  span.className = 'fas fa-ellipsis-v';
  li.appendChild(span);
  span.onclick = function(){
    const listItem = this.parentElement;
    listItem.style.display = "none";
    tasks.splice(i, 1);
    storedTasks();
  };

  tasks.push(inputValue);
  storedTasks();
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', newElement);
}


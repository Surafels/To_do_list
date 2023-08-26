const setupTodoList = () => {
  const myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("i");
    span.className = "fas fa-ellipsis-v";
    myNodelist[i].appendChild(span);
  }

  const ellipsisIcons = document.querySelectorAll('.fas.fa-ellipsis-v');
  ellipsisIcons.forEach(function(icon) {
    icon.onclick = function() {
      const listItem = this.parentElement;
      listItem.style.display = "none";
    };
  });

  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    const span = document.createElement("i");
    span.className = "fas fa-ellipsis-v";
    li.appendChild(span);

    span.onclick = function() {
      const listItem = this.parentElement;
      listItem.style.display = "none";
    };
  }

  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', newElement);
}

// Call the setupTodoList function to initialize the todo list
setupTodoList();
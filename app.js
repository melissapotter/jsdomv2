const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  // create elements
  const value = addForm.querySelector('input[type="text"]').value;

// create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// append to DOM , order does matter here. append child adds element to end of tag
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});



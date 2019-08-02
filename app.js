'use strict';
const inputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
const todoItemEls = document.querySelectorAll('.todo__item');
const deleteButton = document.querySelectorAll('.delete');

function addListItem() {
  inputEl.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      let deleteButton = createDeleteButton();
      let newListItem = createListItem(inputEl.value);
      newListItem.appendChild(deleteButton);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      // todoListEl.appendChild(newListItem);
      inputEl.value = '';
    }
  }); 
}

function createListItem(text) {
  const newListEl = document.createElement('li');
  newListEl.textContent = text;
  newListEl.setAttribute('class', 'todo__item');
  return newListEl;
}

function toggleDone() {
  todoListEl.addEventListener('click', event => {
    if (event.target.classList.contains('todo__item')) {
      event.target.classList.toggle('done');
    }
  });
}

//add delete button

//created delete button on all new items and appended it to "newListItem" in addListItem()
function createDeleteButton() {
  const newListButton = document.createElement('button');
  newListButton.textContent = 'Delete';
  newListButton.setAttribute('class','delete');
  return newListButton;
}

//pretty much did what toggleDone() did.
function deleteItem() {
  todoListEl.addEventListener('click', event => {
    if(event.target.classList.contains('delete')) {
      event.target.parentNode.remove();
    }
  });
}

deleteItem();
toggleDone();
addListItem();

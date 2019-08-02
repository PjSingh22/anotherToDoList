const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      todoListEl.appendChild(newListItem);
      // todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
      todoInputEl.value = "";
    }
  });
}

// function toggleDone() {
//   for (let elem of todoItemEls) {
//     elem.addEventListener("click", function() {
//       elem.classList.toggle("done");
//     })
//   }
// }

function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  })
}

toggleDone();

function createListItem(text) {
  let newListElement = document.createElement("li");
  newListElement.setAttribute("class", "todo__item");
  newListElement.textContent = text;
  return newListElement;
}

addListItem();
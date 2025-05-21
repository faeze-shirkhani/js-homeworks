let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
      if (
        e.target.parentElement.parentElement.style.textDecoration ===
        "line-through"
      ) {
        e.target.parentElement.parentElement.style.textDecoration = "";
      } else {
        e.target.parentElement.parentElement.style.textDecoration =
          "line-through";
      }
    }

    if (e.target.classList.contains("fa-trash")) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // addNewTodo(e.target.todoInput.value);
  const liEl = document.createElement("li");
  liEl.innerHTML = e.target.todoInput.value;
  liEl.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

  let span = document.createElement("span")
  span.classList.add("badge", "bg-primary" ,"rounded-pill")

  let iconCheck = document.createElement("i")
  iconCheck.classList.add("fa" ,"fa-check")

  let iconDelete = document.createElement("i")
  iconDelete.classList.add("fa", "fa-trash")

  span.append(iconCheck, iconDelete)
  liEl.append(span)
  list.append(liEl);

  e.target.todoInput.value = "";
});

// function addNewTodo(todoInput) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
//   const liEl = document.createElement("li");
//   liEl.innerHTML = todoInput;
//   liEl.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

//   let span = document.createElement("span")
//   span.classList.add("badge", "bg-primary" ,"rounded-pill")

//   let iconCheck = document.createElement("i")
//   iconCheck.classList.add("fa" ,"fa-check")

//   let iconDelete = document.createElement("i")
//   iconDelete.classList.add("fa", "fa-trash")

//   span.append(iconCheck, iconDelete)
//   liEl.append(span)
//   list.append(liEl);
// }

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

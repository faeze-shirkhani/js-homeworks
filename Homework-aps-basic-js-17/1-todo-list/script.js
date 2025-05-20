let div = document.querySelector("#content");
let ul = document.createElement("ul");
div.append(ul);

function todoList(arr) {
  // Write your code here...
  arr.forEach((element) => {
    let liEl = document.createElement("li");
    liEl.textContent = element.todo;
    ul.append(liEl);

    liEl.addEventListener("click", (e) => {
      if (!e.target.style.textDecoration) {
        liEl.style.textDecoration = "line-through red";
      } else {
        liEl.style.textDecoration = "";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);

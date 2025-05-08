/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const editor = document.querySelector(".editor");

editor.setAttribute("contenteditable", "true");

const buttons = document.querySelectorAll("button");
buttons.forEach((button, i) => {
  button.setAttribute("id", `button${i + 1}`);

  button.addEventListener("mouseover", () =>{
    button.style.transform = "scale(1.2)"
  })
  button.addEventListener("mouseleave", () =>{
    button.style.transform = "scale(1)"
  })
});


const removeBtn = document.querySelector("#button1");
removeBtn.addEventListener("click", remover);
function remover() {
  let newText = editor.textContent.slice(0, -1);
  editor.textContent = newText;
}

const eraserBtn = document.querySelector("#button2");
eraserBtn.addEventListener("click", () => {
  editor.textContent = "";
});

const boldBtn = document.querySelector("#button3");
boldBtn.addEventListener("click", () => {
  if (editor.style.fontWeight !== "bold") {
    editor.style.fontWeight = "bold";
  } else {
    editor.style.fontWeight = "normal";
  }
});

const italicBtn = document.querySelector("#button4");
italicBtn.addEventListener("click", () => {
  if (editor.style.fontStyle !== "italic") {
    editor.style.fontStyle = "italic";
  } else {
    editor.style.fontStyle = "normal";
  }
});



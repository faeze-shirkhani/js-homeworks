//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

let button = document.querySelector("button");
let iEl = document.querySelector(".ri-handbag-line");

let pTag = document.querySelector("button p");

button.addEventListener("click", (e) => {
  pTag.textContent = "Added to Cart";
  iEl.remove();
  e.target.disabled = true;
});

// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer


let iTag = document.querySelector(".ri-close-line");

iTag.addEventListener("click", () => {
  iTag.parentElement.style.visibility = "hidden";
});

/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

let userInfo = prompt("Enter your text:");
console.log(userInfo);

let letters = userInfo.split("");
// console.log(letters);



let colorFullText = "";

letters.forEach((letter) => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorFullText += `<span style="color: ${randomColor};">${letter}</span>`;
});

let div = document.querySelector("#word").innerHTML = `${colorFullText}🥳`

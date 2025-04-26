//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

let h1El = document.querySelector("h1");
h1El.innerHTML = h1El.innerHTML.replace("2020", "<span>2020</span>");
let span = document.querySelector("h1 span");

setInterval(() => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  span.style.color = randomColor;
}, 1000);

const liEL = document.querySelectorAll("ul li");

liEL.forEach((x) => {
  if (x.innerHTML.includes("Done")) {
    x.style.background = "green";
  } else if (x.innerHTML.includes("Ongoing")) {
    x.style.background = "yellow";
  }else{
    x.style.background = "red"
  }
});

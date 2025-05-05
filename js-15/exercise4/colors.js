/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

let colors = [
  "rgba(31, 127, 102, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 123, 0, 1)",
  "rgba(216, 1, 1, 1)",
  "rgba(223, 4, 70, 1)",
  "rgba(127, 31, 85, 1)",
  "rgba(93, 18, 199, 1)",
  "rgba(93, 18, 199, 1)",
];
const alphas = [1, 0.8, 0.6, 0.4, 0.2];

let newColors = colors.map((e, i) => {
  const parts = e.replace("rgba(", "").replace(")", "").split(",");

  return parts.map(Number);
});
console.log(newColors);

let circle = document.querySelectorAll(".circle");
let rectangle = document.querySelectorAll(".rectangular");

circle.forEach((element, i) => {
  element.style.background = colors[i];
});

circle.forEach((e, i) => {
  e.addEventListener("mouseover", () => {
    e.style.border = "solid 3.5px white";
    e.style.outline = `solid 4px ${colors[i]}`;
  });
  e.addEventListener("mouseleave", () => {
    e.style.border = "none";
    e.style.outline = "none";
  });
  e.addEventListener("click", () => {
    let [r, g, b] = newColors[i];
    rectangle.forEach((rect, j) => {
      let a = alphas[j];
      rect.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;
    });
  });
});

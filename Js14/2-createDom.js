//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

let pTag = document.querySelector("P");

let pTags = document.querySelectorAll("p");

pTags.forEach((x, index) => x.setAttribute("id", `para${index + 1}`));
console.log(pTags);

let i = 0;
for (let p of pTags) {
  i++;
  switch (i) {
    case 1:
      p.textContent = "Hey beautiful";
      p.style.color = "green";
      break;
    case 2:
      p.textContent = "learning js is fun!";
      p.style.color = "red";
      break;
    case 3:
      p.textContent = "practice makes you perfect";
      p.style.color = "green";
      break;
    case 4:
      p.textContent = "keep going, your doing great!";
      p.style.color = "red";
      break;
  }
}

pTags.forEach((element, index) => {
  element.classList.add("text-block");
  element.style.background = "yellow";
  if (index === 0) {
    element.style.fontSize = "1.3rem";
  }
  if (index % 2 === 0) {
    element.classList.add("highlight");
    element.style.background = "pink";
  }
});




let divEl = document.querySelector("#content");
let label = document.createElement("label");
label.textContent = "Choose a color:";
divEl.insertAdjacentElement("afterbegin", label);

let selectEl = document.createElement("select");
divEl.append(selectEl);

let option = document.createElement("option");
option.textContent = "--Please choose an option--";
selectEl.append(option);

function listOfColours(colours) {
  // Write your code here...
  colours.forEach((element, i) => {
    let options = document.createElement("option");
    options.textContent = element;
    selectEl.append(options);
  });
}


let pEl = document.createElement("p");

selectEl.addEventListener("change", (e) => {
  pEl.textContent = `You have selected: ${e.target.value}`;
  pEl.style.color = e.target.value;
  divEl.append(pEl);
});

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

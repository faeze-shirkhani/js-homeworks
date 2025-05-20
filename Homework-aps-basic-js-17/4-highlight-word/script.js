let divEl = document.querySelector("#content");
let label = document.createElement("label");
label.textContent = "Choose a color:";
divEl.insertAdjacentElement("afterbegin", label);

let selectEl = document.createElement("select");
divEl.append(selectEl);

let option = document.createElement("option");
option.textContent = "--Please choose an option--";
selectEl.append(option);
// _____________________________________________

function highlightWords(paragraph, colours) {
  // Write your code here...
  colours.forEach((element, i) => {
    let options = document.createElement("option");
    options.textContent = element;
    selectEl.append(options);
  });

  let pEl = document.createElement("p");
  divEl.append(pEl);
  let newpara = paragraph.split(" ")

  newpara.forEach((e) => {
    let span = document.createElement("span")
    span.textContent = e + " "
    pEl.append(span)

   span.addEventListener("click", () => {
    span.style.background = selectEl.value
   })


  })
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);

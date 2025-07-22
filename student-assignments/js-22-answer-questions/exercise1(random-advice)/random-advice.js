let p = document.querySelector("p");
let quote = document.querySelector("q");
let h1 = document.querySelector("h1");
let button = document.querySelector("button");
quote.textContent = "click the dice and get a advice"

async function randomAdvices() {
  const advice = await axios("https://api.adviceslip.com/advice");
  p.textContent = `ADVICE #${advice.data.slip.id}`;
  quote.textContent = `${advice.data.slip.advice}`;
}

button.addEventListener("click", randomAdvices)
button.addEventListener("mouseover", () => {
  button.style.boxShadow = "0 0 20px 10px rgb(117, 249, 183)";

});

button.addEventListener("mouseleave", () => {
  button.style.boxShadow = "";
});

let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesOutput = document.querySelector(".Tries-output");

let triesLeft = 7;

triesOutput.textContent = `Number of Tries: ${triesLeft}`;
let guessBtn = document.querySelector(".btnGuess");
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let finalOuput = document.querySelector(".final-output");

  finalOuput.textContent = "Number is too high, try again";
  if (guess < 1 || guess > 100 || !guess) {
    finalOuput.textContent = "Please enter a number between 1 and 100";
    return;
  }

  triesLeft--;
  triesOutput.textContent = `Number of Tries: ${triesLeft}`;

  if (guess > randomNumber) {
  } else if (guess < randomNumber) {
    finalOuput.textContent = "Number is too low, try again";
  } else {
    finalOuput.textContent = "Guess is correct. You win!";
  }

  if (triesLeft === 0 && guess !== randomNumber) {
    triesOutput.style.dispaly = "none";
    finalOuput.textContent = `You Lose, the number was ${randomNumber}`;
    guessBtn.disabled = true;
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  triesLeft = 7;
  triesOutput.style.dispaly = "block";
  triesOutput.textContent = `Number of Tries: ${triesLeft}`;

  document.querySelector(".final-output").textContent =
    "Guess a number between 1 and 100";
  guessBtn.disabled = false;
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);

// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number (hint: use parseInt())
// todo3: remove all the items that are NaN: (hint: use isNaN())
// todo4: calculate the sum of all its numbers
// !Answer:

let notNumberArray = ["1", "100", "-9", "", true, null];
let resultNumbers = [];
function SumNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    if (!isNaN(num)) {
      resultNumbers.push(num);
    }
  }
  return resultNumbers.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(SumNumbers(notNumberArray));

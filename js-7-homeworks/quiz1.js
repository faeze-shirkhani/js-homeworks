// ? Question-1:write a function that accepts numbers array as parameter and split negative numbers and positive numbers in two seperated array.
const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:
function splitNumbers(arr) {
  const positiveNumbers = [];
  const negativeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveNumbers.push(arr[i]);
    } else if (arr[i] < 0) {
      negativeNumbers.push(arr[i]);
    }
  }
  return [negativeNumbers, positiveNumbers];
}
console.log(splitNumbers(numbers));

// ? 8. Write a function to calculate the average of array items using reduce
const arr1 = [3, 5, 7, 2];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [11, 3, 1];
function average(arr) {
  return arr.reduce((num1, num2) => (num1 + num2)) / arr.length; // code here
}

console.log(average(arr1)); // result: 4.25
console.log(average(arr2)); // result: 3
console.log(average(arr3)); // result: 5

//! Answer:

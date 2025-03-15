// ? Question-2:write a function to find the biggest number in this  array and push it to a new array
const findBigNumber = [5, 2, -10, 50, 35];

// !Answer:
function findBiggestNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findBiggestNumber(findBigNumber));

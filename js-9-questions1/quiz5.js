//? 5. Write a code to show if there are any truthy values in the array below
//? hint:use just one of this methods and pass the isTruthy function to that method
//? some(), every(), includes(), slice()
const array = ['0', null, '', 0];
function isTruthy(num) {
  // write your code here
  return num.some((x) => x == 0)
}

// !  Answer:
console.log(isTruthy(array));
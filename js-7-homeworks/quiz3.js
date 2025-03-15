// ? Question-3:write a function to remove all the items which are number from the array and return the array
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]

// !Answer:
function removeNumbers(arr) {
  let withoutNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      withoutNumber.push(arr[i]);
    }
  }
  return withoutNumber;
}
console.log(removeNumbers(notNumberArray));

// function removeNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }
// console.log(removeNumbers(notNumberArray));
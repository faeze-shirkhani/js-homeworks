//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone"];

//!  Answer:
function newArr(arr) {
  let char = arr.filter((x) => x.length > 6);
  console.log(char);
  for (let i = 0; i < char.length; i++) {
    if (char[i].length > 10) {
      return false;
    }
  }
  return true;
}
console.log(newArr(array));

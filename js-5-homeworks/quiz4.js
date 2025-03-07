//?Q-2:-Sort the following array once ascending and once descending, and show two new arrays.
// Please use variables given to you and Do Not change the name of them!!
const numbers4 = [10, 50, -8, 3, 0, 100, 70];
let ascendingNumbers = numbers4.sort(function (num1, num2) {
  return num1 - num2;
});
console.log(ascendingNumbers);

let descendingNumbers = numbers4.sort(function (num1, num2){
    return num2- num1
});
console.log(descendingNumbers);

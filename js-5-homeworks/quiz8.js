//?Q-6:Read these documents and write an example for each method.
// todo-1:https://www.programiz.com/javascript/library/array/includes

let fName = ["sara", "mammad", "fateme", "ali"];
let resualt = fName.includes("faeze");
console.log(resualt);
//todo-2:https://www.programiz.com/javascript/library/array/indexof

let family = ["shirazi", "shiri", "shirkhani"];
let index = family.indexOf("farahani");
console.log(index);
//todo-3:https://www.programiz.com/javascript/library/array/slice

const languages = ["JavaScript", "Python", "C", "C++", "Java"];
const slice = languages.slice(0, -1);
console.log(slice);
//todo-4:https://www.programiz.com/javascript/library/array/sort

const array1 = [1, 33, 23, [2 + 5], 57];
array1.sort(function (num1, num2) {
  return num1 - num2;
});
console.log(array1);

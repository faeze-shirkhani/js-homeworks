/**
 * /*
 *   Array getters
 *   -------------------------
 *   Complete the functions below to get the first and last values from the array and return in from the function
 *
 * @format
 */

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  return arr[arr.length - 1]; // complete this statement
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
===================================================
*/
let numbers2 = [1, 2, 3];
let names2 = ["Hossein", "Sina", "AmirAli", "Sirvan"];

console.log(first(numbers2));
console.log(last(numbers2));
console.log(last(names2));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Sirvan
*/

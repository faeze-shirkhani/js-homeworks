/**
 * /*
 *   Logical Operators
 *   ---------------------------------
 *   This program calls some functions that are incomplete.
 *   Update the code so that you get the expected result.
 *
 * @format
 */

// the function should return true if num was positive otherwise return false
function isPositive(num) {
  return num > 0;
}

// the function should return true if num was between 5 and 10 otherwise return false
function isBetween5and10(num) {
  return num > 5 && num < 10;
}

// check the characters if they are less than 10
function isShortName(name) {
  return name.length < 10;
}

function startsWithD(name) {
  return name.startsWith("a");
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
===================================================
*/
console.log("Is 5 a positive number?", isPositive(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is 5 a positive number? true
  Is 10 in the range 5-10? false
  Is Daniel a short name? true
  Does Daniel start with 'D'? true
*/

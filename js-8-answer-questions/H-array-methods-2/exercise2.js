/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str) {
  let arr = str.split("")
  arr[0] = arr[0].toUpperCase()
  return arr.join("")
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = 'benyamin';

console.log(capitalize(sampleName));
console.log(capitalize('hello'));

/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/

///////////////
// export default capitalize;

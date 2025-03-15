// ? Question-5:write a function to reverse a string.(hint:first,convert to array,but the answer must to be string)
// ? "google" => "elgoog"
// ! you can search how to reverse string
// search about split(), reverse(), join()

// !Answer:
let string = "google";
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString(string));

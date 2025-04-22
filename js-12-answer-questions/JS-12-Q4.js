//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

//(با var):
var name = "Ali";
name = "melika"; // قابل تغییر

//(با let یا const):
let myAge = 25;
myAge = 26; // قابل تغییر

const country = "Iran";
// country = "USA"; // Error! we can't change const

// ______________________________________________________________

// قبل:
function greet(name) {
  return "Hello " + name;
}

// جدید:
const greet = (name) => `Hello ${name}`;

console.log(greet("Ali")); // Hello Ali

// __________________________________________________________________

const name = "faeze";
const city = "Tehran";

// قبل:
console.log("My name is " + name + " and I live in" + city +".");

// جدید (Template string & backtick ):
console.log(`My name is ${name} and I live in ${city}.`);


// _____________________________________________________________

// Array :
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // red
console.log(secondColor); // green

// Object:
const user = {
  name: "faeze",
  age: 19,
};

const { name, age } = user;
console.log(name); // faeze
console.log(age); // 19

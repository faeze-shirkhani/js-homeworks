// Using an example, explain the difference between block,global and function scope in variables.

let username = "faeze" //global scope

function sayYourName(fname){ //function scope
  let username = "hasti"
}

console.log(username); //output: faeze
// we can't access the varible inside the block, it only returns the varible that is declared in the global scope.

if(true){
  let age = 20 //block scope
}
console.log(age); // age is not defined
//?Q-3:Consider this array; if it contains the word "javascript", print it to the console."The array contains javascript".
// otherwise print "The array does not contain javascript.
// Please use variables given to you and Do Not change the name of them!!
let programs = ["java", "kotlin", "javascript", "python", "typeScript"];
let javascriptContain;

if (programs.includes("javascript") === true) {
  javascriptContain = "the array containes javascrips";
} else{
    javascriptContain ="The array does not contain javascript";
}
console.log(javascriptContain);

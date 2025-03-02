/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let str = 'I like programming and dogs';

str = str.substring(0, str.indexOf("and"));

console.log(str);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/

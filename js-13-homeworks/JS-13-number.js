/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

let first = Math.floor(Math.random() * 15);
let secodn = Math.floor(Math.random() * 15);

let sequence = [first, secodn];
for (let i = 0; i < 10; i++) {
  let next = (sequence[i] + sequence[i + 1]) * 2;
  console.log(next);
  sequence.push(next);
}

console.log(sequence);

/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

function sum(...nums) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nums.some((n) => typeof n !== "number" || n < 0)) {
        reject("it should be a positive number");
      } else {
        let result = nums.reduce((num1, num2) => num1 + num2);
        resolve(result);
      }
    }, 500);
  });
}


sum(3, 7)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });




// let p = new Promise(function (resolve, reject) {
//   reject('Sorry');
// })

// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// console.log(p)



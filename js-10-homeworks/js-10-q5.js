/*
 ? look at the code below:
 todo: 1. create an object which has three properties. 
 todo: 2. use "for in" to show below result: 
 -Mike is tall, 
 -Jake is kind, 
 -Lilly is young 
 structure: ({key} is {value})
*/

/**Write your code below  */

let obj = {
  Mike: "tall",
  Jake: "kind",
  Lilly: "young",
};

for (const object in obj) {
    let result = `${object} is ${obj[object]}`
    console.log(result);
}

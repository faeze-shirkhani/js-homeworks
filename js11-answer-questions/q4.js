// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: "kd455",
  age: 24,
  username: "john2000",
  skills: ["html", "css", "js"],
};

//  !   Answer:
const [a, b, c] = obj2.skills;

const obj = {
  ...obj2,
  username : "john2005",
  skills: ["python", b, c],
};
console.log(obj);

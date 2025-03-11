//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85

function calculateCircleArea(radius) {
  return radius ** 2 * Math.PI.toFixed(2);
}
console.log(calculateCircleArea(4));

function calculateCircleCircumference(radius){
    return 2 * radius * Math.PI.toFixed(2)
}

console.log(calculateCircleCircumference(3));
//?Q-1:Write a code, give a number from 0 to 6, and show the day of the week (solve it with switch case).
// Please use variables given to you and Do Not change the name of them!!
/*
 0=>monday
1=>tuesday
...
*/

let number = 10;
let result;

switch (number) {
  case 0:
    result = "monday";
    break;
  case 1:
    result = "tuesday";
    break;
  case 2:
    result = "wednesday";
    break;
  case 3:
    result = "thursday";
    break;
  case 4:
    result = "friday";
    break;
  case 5:
    result = "saturday";
    break;
  case 6:
    result = "sunday";
    break;
    default:
        result = "give a number bitween 0 to 6"
}

console.log(result);

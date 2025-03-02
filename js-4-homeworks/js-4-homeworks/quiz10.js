//========================?Q-10==================================

/**
 * /*
 *   BOOLEAN WITH COMPARISON OPERATORS
 *   ---------------------------------
 *   Using comparison operators complete the unfinished statements.
 *   The variables should have values that match the expected results.
 *   DO NOT hard code the values
 *
 * @format
 */

let studentCount = 16;
let mentorCount = 9;
let moreStudentsThanMentors = studentCount >= mentorCount; // finish this statement

const roomMaxCapacity = 25;
let enoughSpaceInRoom = studentCount + mentorCount <= roomMaxCapacity; // finish this statement

const personA = "Zahra";
const personB = "Fatemeh";
let sameName = personA === personB ; // finish this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/

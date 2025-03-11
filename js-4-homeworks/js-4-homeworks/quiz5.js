//========================?Q-5==================================
//? Luke Skywalker has family and friends.help him remind them who is who.given a string with a name, return the relation of that person to luke.(check the example)

/*
Person         Relation
-----------------------
Darth Vadar    Father
Leia          sister 
Han           Brother in law
R2D2          droid

*/

//!Example:
let person = "Darth Vadar";
if (person === "Han") {
  console.log("Brother in low");
} else if (person === "Darth Vadar") {
  console.log("Father");
} else if (person === "Leia") {
  console.log("sister");
} else if (person === "R2D2") {
  console.log("droid");
}

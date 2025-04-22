//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */

function outter() {
  let va1 = "Action";
  console.log(va1);
  function inner() {
    let var2 = "Potential";
    console.log(var2);
    function inner2() {
      let var3 = "Signals";
      console.log(var3);
    }
    inner2();
  }
  inner();
}
outter();
// !Answer:

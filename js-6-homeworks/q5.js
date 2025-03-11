// There are errors in this code, can you fix it to pass the tests?

function sum(a, b, c) {
    return a + b + c;
}

function greeting(name, age){

    return "Hello there, I am " + name+ " and I am " + age + " years old";
}

function total(a, b) {
    total = a + b;
    return "The total is "+ total
}





/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
===================================================
*/


function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed sum function - case 1", sum(3, 4, 6), 13);
test("fixed greeting function", greeting("Alireza", 27), "Hello there, I am Alireza and I am 27 years old");
test("fixed total function", total(23, 5), "The total is 28");

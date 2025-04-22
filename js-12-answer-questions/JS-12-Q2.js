// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(a, b) {
  return a * b;
}

function outerFunc(func) {
  let result = func(3, 4);
  console.log(result);
}
// outerFunc(innerFunc);



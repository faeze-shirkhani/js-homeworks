// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

let bodyTag = (document.querySelector("body").style.backgroundColor =
  "#0a122d");

let image = document.querySelector("#strangeFish");
Object.assign(image.style, {
  margin: "4rem 0",
  borderRadius: "1rem",
});

let h1EL = document.querySelector("h1");
let h5EL = document.querySelector("h5");


Object.assign(image.style, {
  position: "relative",
});

Object.assign(h1EL.style, {
  position: "absolute",
  top: "70px",
  left: "50px",
});
Object.assign(h5EL.style, {
    position: "absolute",
    top: "100px",
    left: "50px",
  });


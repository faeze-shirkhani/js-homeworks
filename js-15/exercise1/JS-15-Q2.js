// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

let spanTags = document.querySelectorAll("span");

spanTags.forEach((element) => {
  element.classList.toggle("blue")
  element.classList.toggle("purple")
});

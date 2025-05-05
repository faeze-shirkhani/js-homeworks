// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

let spanTags = document.querySelectorAll("span");

spanTags.forEach((element) => {
  if (element.classList.contains("blue")) {
    element.classList.remove("blue");
    element.classList.add("purple");
  } else if (element.classList.contains("purple")) {
    element.classList.remove("purple");
    element.classList.add("blue");
  }
});

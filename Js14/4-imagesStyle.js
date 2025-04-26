//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

let images = document.querySelectorAll("img");

images.forEach((x, i) => {
  if ([i + 1] % 2 === 0) {
    x.style.border = "1rem ridge rgba(211, 220, 50, 0.6";
    x.style.borderRadius = "20px"
    x.style.margin = "20px 0"
  }else{
    x.style.border = "10px double #32a1ce";
    x.style.borderRadius = "20px"
  }
});

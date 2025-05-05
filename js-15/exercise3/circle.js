/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========

const button = document.querySelector("button")
const div = document.querySelector("#circle")

function remove(){
  if(div.style.visibility === "hidden"){
    div.style.visibility = "visible"
  }else{
    div.style.visibility = "hidden"
  }
  
}

button.addEventListener("click", remove)
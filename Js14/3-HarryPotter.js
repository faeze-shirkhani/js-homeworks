//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

// https://miro.medium.com/v2/resize:fit:1400/0*fZV8g-1uYh05uz3H
// https://i.pinimg.com/736x/c5/58/8d/c5588d5583c0f3963fe04c74d606101c.jpg
// https://static.tvtropes.org/pmwiki/pub/images/severus_snape.jpg
// https://miro.medium.com/v2/resize:fit:1400/1*3u1GM9w8XN2A704Dd3DbDQ@2x.jpeg
// https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest/thumbnail/width/360/height/360?cb=20161123045136
// https://i.pinimg.com/736x/e8/ac/37/e8ac37615da2975e11e87c1333aebda9.jpg
// https://static.wikia.nocookie.net/adversary_0/images/f/f4/Bellatrix_Lestrange_Infobox.jpg/revision/latest?cb=20200513183018&path-prefix=fr

let charImages = {
  "Hermione-Granger":
    "https://miro.medium.com/v2/resize:fit:1400/0*fZV8g-1uYh05uz3H",
  "Ron-Weasley":
    "https://i.pinimg.com/736x/c5/58/8d/c5588d5583c0f3963fe04c74d606101c.jpg",
  "Severus-Snape":
    "https://static.tvtropes.org/pmwiki/pub/images/severus_snape.jpg",
  "Draco-Malfoy":
    "https://miro.medium.com/v2/resize:fit:1400/1*3u1GM9w8XN2A704Dd3DbDQ@2x.jpeg",
  "Cedric-Diggory":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPmp8CrKgGTID7Z5QfXPbhGYHib-ryZNlXw&s",
  "Lord-Voldemort":
    "https://i.pinimg.com/736x/e8/ac/37/e8ac37615da2975e11e87c1333aebda9.jpg",
  "Bellatrix-Lestrange":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKyqdYjPihSKw15hkok8bxUUXlB0f5rH4chAPCkVfT93pLF7RZMZUC7q7H-pghub9RqU&usqp=CAU",
};

let imageTags = document.querySelectorAll("img");

imageTags.forEach((element) => {
  const charName = element.getAttribute("id");
  if (charImages[charName]) {
    element.src = charImages[charName];
  }
});

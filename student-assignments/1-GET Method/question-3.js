/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");

// ! Answer

async function userData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);

    data.forEach((e) => {
      let div = document.createElement("div");
      let h1EL = document.createElement("h1");
      let h4EL = document.createElement("h4");
      h1EL.textContent = `Company: ${e.company.name}`;
      h4EL.textContent = `Name: ${e.name}`;
      div.append(h1EL, h4EL);
      article.append(div);
      
    });
  } catch {
    alert("error");
  }
}

userData();

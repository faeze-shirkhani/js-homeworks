/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

async function userData(userId) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log(res);
    let data = res.json();
   return data
  } catch {
    alert("error");
  }
}

userData(2).then((data) => {
  console.log(data);
})
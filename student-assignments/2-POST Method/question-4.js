// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */

async function signUpUser() {
  for (let user of users) {
    try {
      const data = await axios.post(
        "https://6831eb52c3f2222a8cb0dc57.mockapi.io/users",
        user
      );
      console.log(data);
    } catch {
      alert("error");
    }
  }
}

signUpUser();

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const form = document.querySelector("form");

const button = document.querySelector("button");

const input = document.createElement("input");
input.type = "tel";
input.setAttribute("id", "phoneNumber");
const lable = document.createElement("lable");
lable.textContent = "Phone Number: ";
lable.for = "phoneNumber";

button.insertAdjacentElement("beforebegin", input);
input.insertAdjacentElement("beforebegin", lable);

async function handleSubmit(event) {
  try {
    event.preventDefault();
    let nameValue = event.target.fName.value;
    let lastNameValue = event.target.lName.value;
    let config = {
      firstName: nameValue,
      lastName: lastNameValue,
      phoneNumber: input.value,
    };
    const response = await axios.post(
      "https://6831eb52c3f2222a8cb0dc57.mockapi.io/users",
      config
    );
    console.log(response.data);

    event.target.fName.value = "";
    event.target.lName.value = "";
  } catch {
    alert("error");
  }
}

form.addEventListener("submit", handleSubmit);
//*To be continue...

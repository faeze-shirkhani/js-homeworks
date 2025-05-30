//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const config = {
  firstName: "Lufy",
  lastName: "monkey.D",
  phoneNumber: "(945) 635-3854",
};
async function updatData() {
  try {
    const response = await axios.put(
      "https://6831eb52c3f2222a8cb0dc57.mockapi.io/users/1",
      config
    );
    console.log(response);
  } catch {
    alert("error")
  }
}

updatData()
//*To be continue...

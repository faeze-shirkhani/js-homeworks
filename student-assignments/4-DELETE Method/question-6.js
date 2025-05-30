//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
const users = [{ id: 93 }, { id: 94 }, { id: 95 }];

async function deleteUsers() {
  for (let user of users) {
    try {
      console.log("deleting user id:", user.id);
      const response = await axios.delete(
        `https://6831eb52c3f2222a8cb0dc57.mockapi.io/users/${user.id}`
      );
      console.log("deleted:", response.data);
    } catch (error) {
      console.error(
        `Error deleting user id ${user.id}:`,
        error.response?.status,
        error.message
      );
    }
  }
}

// deleteUsers();
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */

async function deleteEvenId() {
  try {
    const res = await axios.get(
      "https://6831eb52c3f2222a8cb0dc57.mockapi.io/users"
    );
    const users = res.data;
    const evenUsers = users.filter((user) => Number(user.id) % 2 === 0);

    for (let user of evenUsers) {
      try {
        const deleted = await axios.delete(
          `https://6831eb52c3f2222a8cb0dc57.mockapi.io/users${user.id}`
        );
        console.log("deleted:", deleted.data );
      } catch (error){
        console.log(`Error deleting user id ${user.id}:`, error.response?.status , error.message);
      }
    }
  } catch (error) {
    console.log(error,message);
  }
}

deleteEvenId();
//*End of story :)

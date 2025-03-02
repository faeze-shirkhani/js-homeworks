// 🌟 Open your vscode, then try to solve the following questions there. Finally, send your javascript file considering your answers.
// 1️⃣. Write a code that capitalizes all letters of your name.

// 2️⃣. Write a code that writes all the letters of your name in lowercase.

// 3️⃣. Write code that shows the length of your name in the output.

// 4️⃣. Write a code that removes the empty space of a string. For example, "   hello    " should be transformed into "hello".

// 5️⃣. Write code that stores your first name in one variable and your last name in another, then show them side by side in the console.

// 6️⃣. Write a code that stores your first and last name in a variable, but only shows the last name in the console. (use string indexing with [])

// 7️⃣. Write a code that shows the following text as string in the console:
// "Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.

// 8️⃣. There is a const variable named "abc" given to you to use for the following questions:
// const abc = 'abcdefghijklmnopqrstuvwxyz'
// ● Return your name using the abc variable and string indexing with [].
// ● Return "APSignals" using the abc variable and string indexing with [].


let firstName = "   faEZe   "
let firstNameCapitalize = firstName.toUpperCase()
console.log(firstNameCapitalize)

let firstNameLowercase = firstName.toLowerCase()
console.log(firstNameLowercase)

let length = firstName.length
console.log(length)

let firstNameTrim = firstName.trim().toLowerCase()
console.log(firstNameTrim)

let lastName = "shirkhani"
console.log(`${firstNameTrim} ${lastName}` )

let fullName = "faeze shirkhani"
console.log(fullName[6] +fullName[7] + fullName[8] +fullName[9] +fullName[10] +fullName[11] +fullName[12] +fullName[13] + fullName[14])

let text = "\"Lorem ipsum\", or \"lipsum\" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of \"Cicero's De Finibus Bonorum et Malorum\" for use in a type specimen book."

const abc = 'abcdefghijklmnopqrstuvwxyz'
const myName = abc[5] + abc[0] + abc[4] + abc[abc.length-1] + abc[4]
const result = abc[0].toUpperCase() + abc[abc.length -11] + abc[18] + abc[8] + abc[6] + abc[abc.indexOf("n")] + abc[0] + abc[abc.indexOf("l")] + abc[18]
console.log(myName) 
console.log(result)
// According to your js10 session, write a code that shows why we shouldn't use var?

for(var i =0; i < 10; i++){}//block scope
console.log(i); //output: 10

if(true){
    var age = 20
}
console.log(age);


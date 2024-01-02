// how to print a string in javascript

console.log("harshkumar")

// variables declaration

const accountID = 144553
let accountEmail = "harsh@google.com"
accountcity = "jaipur"

// when we use "const" keyword the we can't change it 
// try to print

console.log([accountID])

//   now we try to print multiple variables at the saME Time , Lets see how ?

console.log([accountID,accountEmail,accountcity])
/* we should not prefer to ""var" keyword to declare variables bcz of issue in block scope and functional scope , despite of the fact that
 it will work . you can see below */

 var accountPassword = "12345"
 console.log([accountID,accountEmail,accountPassword,accountcity])

//  Now- if you will not define the value of variables Javascript will take it as undefined datatype, see how

let accountState;
console.log(accountState)  /* this will show nothing , so let's try to see the type*/
console.log(typeof(accountState))





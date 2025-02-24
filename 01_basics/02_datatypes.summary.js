//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt // they all are call by value datatypes means whole exact value is copied 


// const score = 100
// const scoreValue = 100.3

// const isLogggedIn = false;

// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol("123")


// console.log(id===anotherId)  // false

// // const bigNumber = 324553535325254353453253534523544n




// //  reference (non primitive)

// // arrays, Objects, functions


// const hero =["ironman", "dr.strange", "spiderman"];

// let myObj ={
//     name: "issac",
//     age: 22,
// }

// const myFunction = function(){
// console.log("hello js")

// }

// console.log(typeof(myObj))// object




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap  (non-primitive)

let youtubename = "issac"

let anothername = youtubename

console.log(youtubename)
anothername = "shubham"
console.log(anothername)

// hence it her primitive datatype is used therefore stack memory i.e call by value is used where whole value is copied 



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo  = userOne

userTwo.email = "issac@google.com"
userTwo.upi = "8191@hdfc";

console.log(userOne.email)
console.log(userTwo.email)

// while in this case object is a non primitive datatype therefore heap memory is used so it pass by reference


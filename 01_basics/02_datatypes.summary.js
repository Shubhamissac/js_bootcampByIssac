//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt // they all are call by value datatypes means whole exact value is copied 


const score = 100
const scoreValue = 100.3

const isLogggedIn = false;

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")


console.log(id===anotherId)  // false

// const bigNumber = 324553535325254353453253534523544n




//  reference (non primitive)

// arrays, Objects, functions


const hero =["ironman", "dr.strange", "spiderman"];

let myObj ={
    name: "issac",
    age: 22,
}

const myFunction = function(){
console.log("hello js")

}

console.log(typeof(myObj))// object

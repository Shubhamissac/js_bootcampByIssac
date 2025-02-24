 const name = "issac "
 const repoCount = 50

//  console.log(name + repoCount + " value")

console.log(`my name is ${name} and i pushed ${repoCount} No. of repositories`)

const gameName = new String(`issac9893`)



console.log(gameName.length)         // 9
console.log(gameName.toUpperCase()) // ISSAC9893
console.log(gameName.indexOf('a')) // 3
console.log(gameName.charAt(5))   // 9


const newString = gameName.substring(0,4)

console.log(newString)  // issa

const anotherString = gameName.slice(-8,4)
console.log(anotherString)   // ssa

const newStringOne = "    hitesh    "
console.log(newStringOne)  //     hitesh     
console.log(newStringOne.trim())  //hitesh  // remove extra spaces

const url = "https://issac.com/issac%20shubham"

console.log(url.replace('%20',"-"))
console.log(url.includes('issac'))



// array

const myArr = [0, 1, 2, 3, 4, 5];

// const myHeroes = ["strange", "ironman"]

// const myArr2 = new Array (1,2,3,4)


// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)   // added to start

// myArr.shift()   // remove 9

// console.log(myArr.includes(9))  // it gives boolean value for checking it exist or not
// console.log(myArr.indexOf(3))  // for finding indexes

// const newArr = myArr.join()

// console.log(myArr);

// console.log(typeof myArr);


//slice    spice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B",myArr)


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


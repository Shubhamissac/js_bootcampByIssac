// console.log(2>1);
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)  // true;
// console.log("02">1)  // true;


// console.log(null>0)  //false  (1)
// console.log(null==0) //false  (2)
// console.log(null>=0) //true   (3)

// the reason is that an equality check == and comparisons >, <, >=, <= work differently
// Comparations convert null to a Number, treating it as 0.
// thats why (
//     3) null>=0 is true
//      and
//       (1) null>0 is false.


// === strict check  // it checks datatypes also

// console.log("2"==2)   // true
// console.log("2"===2)  // false because datatype are not same







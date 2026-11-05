"use strict"; //treat all JS code as newer version

//alert(3+3), we are using node.js not browser so this will not work here

//code readability should be high

let name="Munira"
let age =21
let isLoggedin=null

// types of datatypes - number,string,boolean
//null type is object
//undefined
// symbol = unique


//object

console.log(typeof isLoggedin)

/* two types of datatypes
1. primitive
7 types - String, Number, Boolean, null, undefined, symbol(to check unique), BigInt

2. non-primitive 
Array, Objects,Functions
*/

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(anotherId); //false

const bigNumber=3456783456

const heros=['shaktiman','doga'];
let myobj={
    name:"munira",
    age=22,
}

const myfunction=function(){
    console.log("Hello World");
}
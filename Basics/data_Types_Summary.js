// we are difine two types of data types
// on the basis of how we can store data in memory and access the data from memory


// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score  = 100;
// const scorevalue  = 100.3;

// const isLoggedIn =  false;
// const outsideTemp = null;
// let userEmail = undefined;

// const id = Symbol("123");
// const anotherId =  Symbol("123");

// console.log(id == anotherId);

// const bigNumber = 2342345345125452347954n;



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["suraj", "naagraj", "doga"];
let myObj = {
    name : "Suraj",
    age: 45,

}

const myFunction = function (){
    console.log("hello");
};

console.log(typeof heros);
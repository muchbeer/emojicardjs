var numbers = [3, 56, 2, 48, 5];


var newNumbers = [];

function doubles(y) {
    newNumbers.push(y * 3);
}

numbers.forEach(doubles)
//OR using anonymous function
numbers.forEach(function (x) {
    newNumbers.push(y * 2);
});

//or 

const newNumbers = numbers.map(function (y) {
    return y * 3;
})

//Using filter 
//return true for a certain condition

const newNumbers = numbers.filter(function (num) {
    return num >10
})

//Reduce is accumulation or sum up the numbers the function 
const reduceNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})

//find only find the first value if it is true passed the condition
const newNumbers = numbers.find( function (num) {
    return num < 12;
})

//findIndex find the index of the first value return true 
const newNumbers = numbers.findIndex( function (num) {
    return num < 12;
})


//The substring() method of String values returns the part of this 
//string from the start index up to and excluding the end index, 
//or to the end of the string if no end index is supplied.
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"
//this will excludde the index 1 and 3

console.log(str.substring(2));
// Expected output: "zilla"


//Arrow functions remove the function (x)

const newNumbers = numbers.map( (x) => {
    return x + 4;
})

//OR
const newNumbers = numbers.map( x =>  x + 4);


//OR 
const newNumbers = numbers.map( x => {
    return x + 4;
})

//OR 
const newNumbers = numbers.map( (x, y) => {
    return x + y;
})
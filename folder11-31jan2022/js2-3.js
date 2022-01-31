//In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.

const testEven = (n)=> n % 1 === 0 ? n % 2 === 0 : false

// console.log(testEven(0)) //true, "testEven for 0"
// console.log(testEven(0.5)) //false, "testEven for 0.5"
// console.log(testEven(1)) //false, "testEven for 1"
// console.log(testEven(2)) //true, "testEven for 2"
// console.log(testEven(-4))  //true, "testEven for 2"

//******************************* ************************************************

// You were camping with your friends far away from home,
//  but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. Considering these factors:
//? write a function that tells you if it is possible to get to the pump or not. 
//? Function should return true (1 in Prolog and NASM) if it is possible 
//? and false (0 in Prolog and NASM) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>(mpg*fuelLeft)>=distanceToPump

// console.log(zeroFuel(50, 25, 2));  //true;
// console.log(zeroFuel(100, 50, 1));  //false
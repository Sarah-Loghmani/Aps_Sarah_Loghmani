//In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.

const testEven = (n)=> n % 1 === 0 ? n % 2 === 0 : false

// console.log(testEven(0)) //true, "testEven for 0"
// console.log(testEven(0.5)) //false, "testEven for 0.5"
// console.log(testEven(1)) //false, "testEven for 1"
//*****************************************************************************

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
// ***************************************************************************

// Take an array and remove every second element from the array.
//  Always keep the first element and start removing with the next element.

const removeEveryOther = (arr)=> arr.filter((ele , index)=> 
index % 2 === 0 )

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));  //['Hello', 'Hello Again']);
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));      //[1, 3, 5, 7, 9]);
// console.log(removeEveryOther([[1, 2]]));                             // [[1, 2]]);
// console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));      //[['Goodbye']]);
// **************************************************************************

// Summation
// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

const summation = (num)=> {
    let arr = []
   for(let i = 0 ; i <= num ; i++){
     arr.push(i)
    }
    return arr.reduce( (num1, num2)=> num1+num2 )
}
// console.log(summation(1));  //1;
// console.log(summation(8));  //36;
// ****************************************************************************

// You will be given an array of all the family members' ages, in any order. 
//The ages will be given in whole numbers,
// so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array (a tuple in Python) with
// [youngest age, oldest age, difference between the youngest and oldest age].

const differenceInAges= (arr)=>{
  let result=[];
  let youngestAge = Math.min(...arr);
  let oldestAge = Math.max(...arr);

  result.push(youngestAge, oldestAge,  oldestAge - youngestAge);
  return result;
}
                         
// console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
// console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
// *************************************************************

// Write a function, gooseFilter , 
// that takes an array of strings as an argument 
// and returns a filtered array containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])); //[];
// ***************************************************************************

// Create a class Ball. 
// Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function (ballType) {
  // your code goes here
  return !ballType ? (this.ballType = "regular") : (this.ballType = ballType);
};

console.log( Ball());
console.log(Ball("super")); 
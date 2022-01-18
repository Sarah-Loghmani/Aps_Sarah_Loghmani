/*Take two objects with similar key values and combine them into a 
new object summing any values that belong to the same category.
There's a married couple, Hank and his spouse Sheila. Hank works at
  a power plant making $70,000 a year, and Sheila is a teacher
 making $40,000 a year. They both earn rental income from separate rental 
 properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income
  because it fits the same category.
  Examples:
  const user1 = {
  powerPlant: 70000,
  rental: 12000
}
const user2 = {
  teaching: 40000,
  rental: 10000
}
becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
Arguments
user1Income (Object) ⁠— an income object for user1
user2Income (Object) ⁠— an income object for user2
returns: A new object with like values combined
Challenges
They won't have the same number of key-value pairs.
The return object must return the values ordered from lowest
 to highest so your answers can match the test answers.
 */
//  const user1 = {
//    powerPlant: 70000,
//    rental: 12000,
//  };
//  const user2 = {
//    teaching: 40000,
//    rental: 10000,
//  };

//  const combine = (obj1, obj2)=>{
//      const newObj = {...obj1, ...obj2}
//      for(const key1 in obj1){
//          for(const key2 in obj2)
//          if (key1 === key2 ){
//               newObj[key1]=obj1[key1] + obj2[key2]
//             }
//             // console.log(newObj);
//         }
//         return newObj
// }
// console.log(combine(user1, user2));


// ******************************************************


// ?not solved vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
/*
Your task is to create a function that simulates a vending machine.
Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
The return value is an object with 2 properties:
product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).
Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
Notes
The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.
 */
 

// *********************************************

// ? not solved vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
/*
Create a function that identifies the very first item that has recurred
 in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.
Examples
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
D first appeared at index 0, resurfaced at index 3
T appeared and resurfaced at indices 3 and 6 but D completed the cycle first
recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}
recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}
Notes
You can solve this challenge via a recursive approach, alternatively.
A recursive version of this challenge can be found here.
 */

// const firstReccurenceIndex= (str)=>{
//     let arr = str.split('')
//     let count = 0;
//     let obj = {}

//     for(let i=0 ; i<arr.length ; i++){
//         for(let j=1 ; j<arr.length ; i++){
//             if(arr[i]!==arr[j]){
//                 count++
//             }
//         }
//         // while(arr[i] === arr[i+1]){
//             // }
            
//             obj[arr[i]] = [arr[i], count+1] 
//         }
//         return obj
// }
// console.log(firstReccurenceIndex("YXZXYTUVXWV"));;

// ---------------------------------------------------

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
    return str = str.split("").reverse().join("");
 // return str = [...str].reverse().join("");
}
console.log(solution("world"));;

// ------------------------------------------------------------

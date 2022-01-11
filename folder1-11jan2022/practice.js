// *practicing the previos extra homework that i haven't done yet
// function 2 - js

/**
 * /*
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 *
 * @format
 *
 * ///////////////////////////////
 * this function => (tidyUpString) is for js1-3 so you don't need to solve it
 * ///////////////////////////////
 *
 */

// ! i can't understand why the replaceAll() method didn't work. i have to ask it.

function tidyUpString(strArr) {
    return strArr.map((str) =>str.replace("/", " ").trim().toLowerCase());
}
// ? I use map() in order to alter every string in the array and returns a new array that:
// ? Every str is trimed by trim() method. Every str is altered to lower case by toLowerCase() method.
// ? "/" in every str is repleced with ' '. 

/*
 Complete the function to check if the variable `num` satisfies the following requirements:
 - is a number
 - is even
 - is less than or equal to 100
 Tip: use logical operators
 */

function validate(num) {
 return typeof num === "number" && num % 2 === 0 && num <= 100
}
//? We just want to know if the input numbers match the conditions.
//? So we use logical (boolean) operators.
//? Argument type must be "number", the remainder of a number divided by 2 must be 0.
//? And the number must be less than or equal to 100 (<=)

/* 
Write a function that returns a copy of the given array arr,
but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/
function remove(arr, index) {
  arr = arr.slice(0, index).concat(arr.slice(index + 1));
  return arr;
}
//? I can not use splice () because I do not want to change the original arr.
//? slice () is not destroctive method. First I get the element[0] of array to the element[index] of the array.
//? And then return the rest of the elements after the element[index] 
//? And I concat them.


/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  return arr.map(num=> num<100 ? Math.round(num*100)/100 + '%' : "100%");
}
// ? i use map() to return a new array with new specifications.
// ? if every numbers in the array is less than 100 the map() altered the number to this order:
// ? The number is multiplied by 100 and then rounded and then divided by 100 to get two decimal places. 
// ? and at the end added to '%'.
// ? else the number is altered to '100%'


// formatPercentage([23, 18.103, 187.2, 0.372]), ["23%", "18.1%", "100%", "0.37%"];

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require("util");

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);

test("validate function works - case 1", validate(10), true);
test("validate function works - case 2", validate(18), true);
test("validate function works - case 3", validate(17), false);
test("validate function works - case 4", validate("Ten"), false);
test("validate function works - case 5", validate(108), false);

test(
  "remove function works - case 1",
  remove([10, 293, 292, 176, 29], 3),
  [10, 293, 292, 29]
);
test(
  "remove function works - case 2",
  remove(["a", "b", "c", "d", "e", "f", "g"], 6),
  ["a", "b", "c", "d", "e", "f"]
);

test(
  "formatPercentage function works - case 1",
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ["23%", "18.1%", "100%", "0.37%"]
);

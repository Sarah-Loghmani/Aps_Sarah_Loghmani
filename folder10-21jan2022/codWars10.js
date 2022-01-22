// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
let array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
console.log(array);
console.log('hi');

const findOdd = (arr) => {
  let count = 0;
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (arr[i] === arr[j]) {
        count++
        obj[arr[i]] = count
        
        console.log(obj);
      }
    }
  }
  // return
};
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

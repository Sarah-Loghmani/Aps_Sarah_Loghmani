// spread operators
let myName = 'Sara Loghmani'
let newArr = [...myName]
console.log(myName);
console.log(...myName);
console.log(newArr);

//array destructure
const arr = [1,2,3,4,5,6,7];
const arr2 = ['A','B','C','D','E','F','G'];
const arr3 = [...arr, arr[0], ...arr2]
console.log(arr3);

const [elOne, elTwo, elThree, elFour, elFive, ...jasem] = arr
console.log(elOne, elTwo, elThree, elFour, elFive, jasem);

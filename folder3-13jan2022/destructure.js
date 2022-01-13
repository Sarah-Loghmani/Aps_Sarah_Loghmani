// // spread operators
// let myName = 'Sara Loghmani'
// let newArr = [...myName]
// console.log(myName);
// console.log(...myName);
// console.log(newArr);

// //array destructure
// const arr = [1,2,3,4,5,6,7];
// const arr2 = ['A','B','C','D','E','F','G'];
// const arr3 = [...arr, arr[0], ...arr2]
// console.log(arr3);

// const [elOne, elTwo, elThree, elFour, elFive, ...jasem] = arr
// console.log(elOne, elTwo, elThree, elFour, elFive, jasem);


// // onject destructure
// const obj1 = {
//     Name: 'sara',
//     familly: 'loghmani',
//     myRole: 'web developer'
// }
// const obj2= {
//     age:33,
//     gneder: 'female'
// }
// const obj3 = {...obj1, ...obj2};
// const {Name, age} = obj3;
// console.log(obj3);
// console.log(Name, age);

// براساس این تمرین آخرین مسئله از تکلیف آخر را بررسی میکنم

function validatePasswords(passwords) {
  for (let i = 0; i < passwords.length; i++) {
    let str = passwords[i];
    let arr = passwords.filter((el) => el !== el[i]);
    !arr.includes(str) ? true : false;
  }
  passwords.map((password) => {
    if (
      password.length >= 5 &&
      containsUppercaseLetter(password) &&
      containsUppercaseLetter(password) &&
      containsNumber(password) &&
      containsSymbol(password)
    ) {
      return true;
    } else {
      return false;
    }
  });
}


// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}
// باز هم نتونستم جواب رو بیایم بعدا بهش رجوع می کنم
// **************************************************************//*


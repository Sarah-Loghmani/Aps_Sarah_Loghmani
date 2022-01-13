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
/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

// * ================== I can't do it =============================
// * ================== I can't do it =============================
// * ================== I can't do it =============================
// * ================== I can't do it =============================
// * ================== I can't do it =============================

function validatePasswords(passwords) {

  passwords.map(password =>{
    let restArr = 
    if(password.length>=5 &&
       containsUppercaseLetter(password) &&
       containsUppercaseLetter(password) &&
       containsNumber(password) &&
       containsSymbol(password) &&

       ){
         return true;
        }else {
          return false;
        }
  })
}  
const  double = (arr, num)=>!arr.includes(num)
for(let i = 0 ; i < password.length ; i++){
    password
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

/* ======= TESTS - DO NOT MODIFY ===== */

test("Example 1", () => {
  expect(
    validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ])
  ).toEqual([false, false, true, false, false]);
});

test("Example 2", () => {
  expect(
    validatePasswords([
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ])
  ).toEqual([true, true, false, false, false]);
});
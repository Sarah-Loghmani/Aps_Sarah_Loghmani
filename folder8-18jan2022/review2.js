// *block scope
// function x() {
//   let num = 6;
// }
// x();
// console.log(num)//is not definde
// // console.log(x()); //undefind
// ----------------------------

// const a = 0
// function y(){
//     a=6
// }
// // console.log(a);
// y()
// ------------------------------

// let s = 1
// if (s>0){
//     g = 1
//     // var g = 1
//     // let g = 1
//     // const g = 1;
// }
// console.log(g);

//* 
// let arr=[1,2,3,4,5,6,7]
// let arr2 =[]

// for(let el of arr){
//    console.log(arr2.push(el * 2));
// }
// console.log(arr2);
// 
// *
// let arr3 =[]
// for(let i = 0 ; i < arr.length ; i++){
//     // let arr2 = [];
//     arr3.push(arr[i]*2)
//     // console.log(arr2);
// }
// console.log(arr3);
// -------------------------------------------------

// const number =  2
// function h(){
//     const number = 5;
//     console.log(number);
// }
// console.log(number);
// h()
// console.log(number);
// -----------------------------------------------

// *objects

let myAge = 'myFriendAge';
let myName = 'sara'

const obj ={

    myName,
    [myAge] : 33,
    buy : ['kala1', 'kala2'],

    myBirthYear (age){
        console.log(`dear ${myName} your birthyear is ${1400 - age}`);
    },
    cards : [],
    shopping (){
        console.log(this.buy);
    }
}
obj.myBirthYear(obj[myAge])
obj.shopping()

obj.favorites = ['clothes', 'plants', 'food']
console.log(obj.favorites);
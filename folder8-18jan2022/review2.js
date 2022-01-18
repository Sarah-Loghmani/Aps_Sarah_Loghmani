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
    gender : 'female',
    1399 : 'first',
    1400 : 'last',
    friend : ['mahdie', 'sama', 'derang'],
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
console.log(obj['favorites'])
console.log(obj['myName']);
console.log(obj[myAge]);
console.log(obj[1399]);
console.log(obj['1399']);
// console.log(obj.1399);//NEMISHE


const {gender , friend , favorites}= obj
console.log(gender, friend, favorites);

// ------------------------------
//$  object destructure
const circle = {
    radiuce : 5,
    name : 'myCircle',
    decimal : 5
}
// circle.decimal = 2
// console.log(circle);

const circleArea = ({radiuce ,decimal}) => {
    return (Math.PI*radiuce * radiuce).toFixed(decimal)
}
console.log(circleArea(circle));
// ---------------------
//$ array destructuring
//$ rest operator

const [one, two, three] =[1, 2, 3]
console.log(one, two , three);

const arrayFirst = [1, 2, 3, 4, 5]
const [ first , second , ...restOfArrayFirst] = arrayFirst
console.log(first , second , restOfArrayFirst);
const [name, ...numbers] = ['sara' , 1,2,3,4 ]
console.log(name, numbers);

const profile = {
    fisrtName : 'Sara',
    lastName : 'Loghmani',
    age : 33,
    gender : 'female'
}
const {firstName, ...restOfProfile}= profile
console.log(restOfProfile);


// ----------------------------

let myFunc = function(a,b,c){
return a+b+c;
}
let number = [1,2,3]
// console.log(myFunc(...number));

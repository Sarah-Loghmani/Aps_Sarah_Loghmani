// *for(variable in obj) {}
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
}
for(let key in obj){
    console.log(`${key.toLocaleUpperCase()} : ${obj[key]}`);
}
// -----------------------------------------------------------------------
// *object.keys(obj)

const students = {
    sarah: 19,
    Aslan: 15,
    jan: 18,
    ABASS: 20,
    FERESHTE: 19,
}

let arr = Object.keys(students).map((ele) => ele.toUpperCase());
console.log(arr);//[ 'SARAH', 'ASLAN', 'JAN', 'ABASS', 'FERESHTE' ]
for (let key in students){
  console.log(key.toUpperCase());
  /*SARAH
    ASLAN;
    JAN;
    ABASS;
    FERESHTE;
  */
}
// ---------------------------------------------
// *Object.values(obj)
const flowers ={ 
    rose:'red', 
    lili:'purple', 
    liliium:'White'
}
console.log(Object.keys(flowers));
console.log(Object.values(flowers));
// -------------------------------------------
// *this
// ?functions -> window
// decalaration function
function funcName(){
    console.log(this);//window
}
// execute / invoke
funcName()
// nested function
function funcName2() {
  console.log(this); //window
}
funcName2();
// arrow function
const funcName3 = ()=> console.log(this);
funcName3()

// ? method -> object
// method  =  a function in an object
const test = {
    firstName : 'sara',
    lastName : 'loghmani',
    age : 33,
    fullName(){
        console.log(this);//object(local scope)
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`; 
    },
    greeting : function(){
        console.log(this);//object(local scope)
        return `'Hello dear ${this.fullName()}`
    },
    birthDay : ()=>{
        console.log(this);//window(global scope)
        // return `'your birthyear is ${1400 - this.age}`// undefined
        return `'your birthyear is ${1400 - test.age}`;
    },
    func1(){
        
    }
}
console.log(test.fullName());
console.log(test.greeting());
console.log(test.birthDay());

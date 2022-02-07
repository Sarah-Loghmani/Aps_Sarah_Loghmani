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
const funcName2 = function() {
    const nested = ()=>
  console.log(this); //window
  nested()
}
funcName2();

// arrow function
const funcName3 = ()=> console.log(this);//window
funcName3()

// ? method -> object
// method  =  a function in an object
const test = {
  firstName: "sara",
  lastName: "loghmani",
  age: 33,

// decalaration function
  fullName() {
    console.log(this); //object(local scope)
    return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
  },

  greeting: function () {
    console.log(this); //object(local scope)
    return `'Hello dear ${this.fullName()}`;
  },
  
  // decalaration function nested in decalaration function
  func1() {
      console.log(this); //object
      const nested = function () {
          console.log(this); //window
        };
        nested();
        return "<3";
    },

    //   arrow function nested in decalaration function
      func2() {
        console.log(this); //object
        const nested =  () =>{
          console.log(this); //object
        };
        nested();
        return "<3";
      },

    // arrow function
      birthDay: () => {
        console.log(this); //window(global scope)
        // return `'your birthyear is ${1400 - this.age}`// undefined
        return `'your birthyear is ${1400 - test.age}`;
      },

//  decalaration function nested in arrow function
    arrow: ()=>{
        console.log(this);//window
        function nested(){
            console.log(this);//window
        }
        nested()
    },

    // arrow func nested in arrow
    arrow2: ()=>{
        console.log(this);//window
         const nested=()=>{
            console.log(this);//window
        }
        nested()
    }
};

console.log(test.fullName());
console.log(test.greeting());
console.log(test.func1());
test.func2()
console.log(test.birthDay());
test.arrow()
test.arrow2()


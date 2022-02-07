
document.body.style.transition = "2s background-color";

// setTimeout( ()=> document.body.style.backgroundColor = "red", 2000);
// setTimeout( ()=> document.body.style.backgroundColor = "khaki", 4000);
// setTimeout(() => (document.body.style.backgroundColor = "aqua"), 6000);


// CALL BACK HELL
// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";

//     setTimeout(() => {
//       document.body.style.backgroundColor = "khaki";

//       setTimeout(() => {
//         document.body.style.backgroundColor = "aqua";

//       }, 2000);
//     }, 2000);
// },2000);


// *callBack function
// ? first way
// const colorChange = (color , delay)=>{
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//     }, delay);
// };

// colorChange('red' , 2000);
// colorChange("khaki", 4000);
// colorChange("aqua", 6000);

// ? first way
// const colorChange = (color, delay, doNext)=>{

//     setTimeout(()=>{

//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     },delay);
// };

// colorChange('red', 2000, ()=>{

//     colorChange('khaki',2000, ()=>{

//         colorChange('aqua', 2000);
//     });
// });

// *promise

// const p = new Promise((resolve, reject)=>{
//     let delay = Math.floor(Math.random()*2500+500);

//     setTimeout(()=>{
//         delay<1500 ? resolve('Success') : reject('Failed')
//     }, delay)
// });

// p.then((msg)=>{
//     console.log('This in in the then ' + msg);
// }).catch((msg)=>{
//     console.error("This is in the catch " + msg);
// });


//*this

// functions => just WINDOW 
// methods => function in objects

// console.log(this);//window

//* decalaration functions
const x = function(){
    // console.log(this);//window
}
x();
 
// nested declaration functions
function y(){
    function x() {
        // console.log(this);//window
    }
    x();
}
y();

function z(){
    const x = ()=>{
        // console.log(this);//window
    }
    x();
};
z();

// arrow functions
const r = ()=>{
    // console.log(this);//window
};
r();
// nested arrow functions
const c = ()=>{
    const g = ()=>{

        // console.log(this);//window
    }
    g();
};
c();

const ul = ()=>{
    const o = ()=>{
        // console.log(this);//window
    }
    o();
};
ul();

//* methods => functions in objects

const object = {
  userName: "bill",
  lastName: "gates",
  age: 70,

  // declration function
  // first way:
    fullName(){
        console.log(this);//object(local scope)
       return `${this.userName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
  // second way:
  greeting: function () {
    console.log(this);//object
   return `Hi dear ${this.fullName()}`;
  },

    //declaration function nested in declaration function
    func1(){
        const nested = function () {
            console.log(this);//window(global scope)
        };
        nested();
        return '<3'
    },
    // arrow functions nested in declaration function:
    func2: function(){
        setTimeout(()=>{
          console.log(this); //object(local scope)
          console.log(this.age);
        },2000)
    },

    // arrow functions
    func3: ()=>{
      console.log(this); //global scope(window)
      return `Your birthyear is ${1400 - object.age}`;
    },
    // declaration functions nested in arrow functions
    func4: ()=>{
        function nested(){
            console.log(this);//global scope(window)
        }
        nested();
    },
    
    // arrow functions nested in arrow functions
    func5: ()=>{
        const x = ()=>{
            console.log(this);//global scope(window)
        }
        x();
    }
};
// console.log(object.fullName());
// console.log(object.greeting());
// console.log(object.func1());
// object.func2();
// console.log(object.func3());
// object.func4();
// object.func5();

// * object.keys()
// * object.values()

console.log(Object.keys(object));
console.log(Object.keys(object).length);

console.log(Object.values(object));

// for in

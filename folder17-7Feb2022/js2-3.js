
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
const colorChange = (color, delay, doNext)=>{

    setTimeout(()=>{

        document.body.style.backgroundColor = color;
        doNext && doNext();
    },delay);
};

colorChange('red', 2000, ()=>{

    colorChange('khaki',2000, ()=>{

        colorChange('aqua', 2000);
    });
});

// *promise

const p = new Promise((resolve, reject)=>{
    let delay = Math.floor(Math.random()*2500+500);

    setTimeout(()=>{
        delay<1500 ? resolve('Success') : reject('Failed')
    }, delay)
});

p.then((msg)=>{
    console.log('This in in the then ' + msg);
}).catch((msg)=>{
    console.error("This is in the catch " + msg);
});
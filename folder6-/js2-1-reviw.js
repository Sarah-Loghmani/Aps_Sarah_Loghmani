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
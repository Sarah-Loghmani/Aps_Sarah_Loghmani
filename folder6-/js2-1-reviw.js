// for in
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
}
for(let key in obj){
    console.log(`${key.toLocaleUpperCase()} : ${obj[key]}`);
}
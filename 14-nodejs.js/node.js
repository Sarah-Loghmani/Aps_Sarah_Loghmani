// console.log(process);
//* process is an great object that inform about node and just is accessible is node environment.

// console.log(process.argv);
//* This is an array that have two elements: [0]=> address of node in system, [1]=>  address of the file that is being altered.

console.log(module);
//* module is an object that 'exports' property is important

const sum = (a, b) => console.log(a + b);
module.exports.sum = sum;
module.exports.name = 'SARAH'
//* We can add any property to the exports object.

console.log(module);



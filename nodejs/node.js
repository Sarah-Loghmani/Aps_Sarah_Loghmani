// console.log(process);
//* process is an great object that inform about node and just is accessible is node environment.

// console.log(process.argv);
//* This is an array that have two elements: [0]=> address of node in system, [1]=>  address of the file that is being altered.

// console.log(module);
//* module is an object that 'exports' property is important

const sum = (a, b) => console.log(a + b);
module.exports.sum = sum;
module.exports.multiply = (a, b) => console.log(a * b);
module.exports.name = "SARAH";
//* We can add any property to the exports object.Then it is ready to use these properties in another file.

// console.log(module);
//*go to app.js

// ?  File System
//?--------------
//* fs node is an big object that when we require we call it:
const fs = require("fs");

//* there are a lot of method in it that let interact with files of system.

// console.log(fs);
//* assign folder names in a variable
const directoryName = {
  async: "DirectoryAsync",
  sync: "DirectorySync",
};

//* Create A Directory In NodeJS (Async)
fs.mkdir(`${directoryName.async}`, { recursive: true }, (err) => {
  if (err) throw err;
});
//* Create A Directory In NodeJS (Sync)

fs.mkdirSync(`${directoryName.sync}`, { recursive: true });

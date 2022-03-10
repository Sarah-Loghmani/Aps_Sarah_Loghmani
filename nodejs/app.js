const node = require("./node.js");
//* We import the 'node.js' file here and now we have an object of all data of node.js we can use any properties of it that have been exported before in 'node.js'.

// console.log(node);

node.sum(2, 5);

const { multiply, name } = node;
multiply(50, 2);
console.log(`Hello ${name}`);

//////////////////////////////////////////////////////////
//* getting all orders from costumer's orders/index.js

const costumerOrders = require("./costumer's orders");
//* it is not necessary to write index.js. because it finds it by default.

//? go back to node.js



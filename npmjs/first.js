//* npm => Node Package Manager(node modules)
//* We can install or uninstall node modules:[1]=>global=> accessible every where (not recommended) [2]=>local => just access on the local file (recommended)

//? https://www.npmjs.com/
//? https://yarnpkg.com/

//*first of all before installing of any npm packages must install package.json file by this commend:
//? npm init -y
//* this commend create package.json witch records important metadata about a project which is required before publishing to NPM

//* then in the terminal we write this commend: 
//? npm i/install {package name}
//* this commend create:
//**** node-modules file => & 
//**** package-lock.json => just check out the node module versions & 
//**** add dependencies property to package.json 


//* after cloning a repo that have node modules we have to write 'npm i ' in the terminal

//* tor installing a specific version of a npm we can use this commend:
//? npm install/i {package name}@ 0.2.3 (for example)




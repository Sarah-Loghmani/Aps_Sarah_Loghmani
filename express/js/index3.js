const express = require('express');

const server = express();

const port = 5900;

// https://expressjs.com/en/4x/api.html
server.use((req , res)=>{
    // console.dir(req);
    // console.dir(res.send);
    // console.log('hello');
    res.send('<h1>This is your <span style="color:red">response</span></h1>');


})

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
const express = require('express');

const server = express();

const port = 5900;

server.get('/', (req, res) => {
    res.send('home page');
    // console.log(req.params);//{}
});

server.get('/r/:something', (req, res) => {
    console.log(req.params);
    const {something} = req.params;
    res.send(`send from ${something}`);
    // console.log(something);
})

server.get('/r/:something/:id', (req, res)=>{
    const {something, id} = req.params;
    res.send(`send from ${something} with this id: ${id}`);
})
server.listen(port, ()=>{
    console.log(`server is running on port ${port}`);

})
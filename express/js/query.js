const express = require('express');
const app = express();

const port = 3300;

app.get('/:item', (req, res) => {
    const {item} = req.params;
    const {q} = req.query;

    if (!q){
        res.send(`no query;`)
    }

    res.send(`<h1>pram : ${item} query : ${q}</h1>`);
})

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})
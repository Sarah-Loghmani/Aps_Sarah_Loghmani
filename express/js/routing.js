const express = require('express');

const app = express();

const port = 3200;

app.get('/', (req, res) => {
    res.send('<h1>this is home page</h1>')
});

app.get("/cat", (req, res) => {
    res.send('<h1>cat 😻</h1>')
});

app.get('/dog', (req, res)=>{
    res.send('<h1>dog 🐶</h1>')
});
app.get('/test', (req, res) => {
    res.sendFile('./index.html')
})
app.get("*", (req, res) => {
    res.send('page not found')
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})
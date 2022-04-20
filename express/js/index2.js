const express= require('express');

const app = express();

const port = 5500;


app.use(()=>{
    console.log('Got the response');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
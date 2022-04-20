//* write npm init -y in the terminal
//* npm i express

const express = require('express');
// console.log(express);

const app = express();

const port = 5000;
app.listen(port , ()=>{ 
    console.log(`Server is running on port ${port}`);
});

//* write node index.js in the terminal
//* in the browser write locallhost:5000
//* should display this sentence => cannot GET /

app.listen(3400, ()=>{
    console.log(`Server is running in port 3400;`);
});

//* if don't run the file in node and in the browser search locallhost:3400 so the site can't be reached;

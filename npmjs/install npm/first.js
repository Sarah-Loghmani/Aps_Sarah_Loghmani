

//* first of all i direct the terminal to this local file
//* then write "npm init -y" commend in the terminal
//* the package.json is created
//* i write "npm i bootstrap"
//* added dependencies property in package.json
//* i go to index.html
//* and import the link into the <head> element.(<link>for graphical paths such as bootstrap & fontawesome or <script> for js such as axios)

//TODO => to show in terminal

// const joke = require("give-me-a-joke");
// const colors = require("colors");
// joke.getRandomDadJoke((joke) => console.log(joke.america));


//TODO => let's make a app

const jokeEl = document.querySelector(".joke");
const btn = document.querySelector("button");
// add event listener
btn.addEventListener("click", () =>{
    axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        },
      })
      .then(res=>{
          jokeEl.innerHTML = res.data.joke
      });
})
const firstBtn = document.querySelector(".firstButton");

//* onclick
// firstBtn.addEventListener("click", ()=>alert("this is js event 2") )

// firstBtn.onclick = function(){
//     alert("this is js event")
//     console.log(firstBtn);
// };// this version override the html version;
// and first this version fires and then the "addEventListener" fires.



// *mouseenter
const welcome = ()=> alert("welcome my friend.")
// document.onmouseenter = welcome

// * resize
const heightSize = document.querySelector("#hieght");
const widthSize = document.querySelector("#width");
let displayPra = document.querySelectorAll(".display")

// console.log(window);
function reportResize(){

    displayPra.forEach(p=>(p.style.display = "block")); 
    heightSize.textContent = window.innerHeight;
    widthSize.textContent = window.innerWidth;
};

window.addEventListener("resize", reportResize)


// * double click
const h1El = document.querySelector("h1");
h1El.addEventListener("dblclick", ()=> h1El.style.color ="brown")

// *quize 
let reportColor = document.createElement("h3");
document.body.append(reportColor);

const randomColor = ()=>{

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
     
    return `rgb(${r}, ${g}, ${b})`;
}

const onClickRandomColor = ()=>{

    reportColor.textContent = randomColor()
    document.body.style.backgroundColor = randomColor();
}

const colorBtn = document.querySelector(".random-color");

colorBtn.addEventListener("click", onClickRandomColor)


// *DOM-this
for(let i=0 ; i<21 ; i++){

    const buttons = document.createElement("button");

    buttons.innerText = "CLICK";
    document.body.append(buttons);

    buttons.style.height = "100px";
    buttons.style.width = "100px";
    buttons.style.margin = "20px";

    buttons.addEventListener("click", function(){

        console.log(this);//have to write decleration function to refers to the button.
        this.style.background = randomColor();
        this.style.color = randomColor();
    });
};

const colorize = function(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

for(let i=0 ; i<11 ; i++){

    const h1El = document.createElement("h1");
    h1El.innerText = "Click me";
    document.body.append(h1El);

    h1El.addEventListener("click", colorize);
};

// *keyup
const input = document.createElement("input");
input.type = "text";
input.placeholder = "push an Arrow to move the red box";

document.body.append(input);
input.style.margin = "20px 100px";

input.addEventListener("keyup", e =>{
    // console.log(e);
})

// *keydown
input.addEventListener("keydown", e =>{
    console.log(e.code);
})

const div = document.createElement("div");
document.body.append(div);
div.style.backgroundColor = "red";
div.style.width = '200px';
div.style.height = "200px";
div.style.position = "absolute";
let divTop = div.style.top = 1600;
let divLeft = div.style.left = 50;

input.addEventListener("keydown", e =>{
    switch(e.code) {
      case "ArrowDown":
        div.style.top = `${divTop++}px`;
        break;
      case "ArrowUp":
        div.style.top = `${divTop--}px`;
        break;
      case "ArrowLeft":
        div.style.left = `${divLeft--}px`;
        break;
      case "ArrowRight":
        div.style.left = `${divLeft++}px`;
        break;
    };
});











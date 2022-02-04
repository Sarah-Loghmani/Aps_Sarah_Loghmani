const firstBtn = document.querySelector(".firstButton");

//* onclick
// firstBtn.addEventListener("click", ()=>alert("this is js event 2") )

firstBtn.onclick = function(){
    alert("this is js event")
    console.log(firstBtn);
};// this version override the html version;
// and first this version fires and then the "addEventListener" fires.



// *mouseenter
const welcome = ()=> alert("welcome my friend.")
// document.onmouseenter = welcome

// * resize
const heightSize = document.querySelector("#hieght");
const widthSize = document.querySelector("#width");
let displayPra = document.querySelectorAll(".display")

console.log(window);
function reportResize(){

    displayPra.forEach(p=>(p.style.display = "block")); 
    heightSize.textContent = window.innerHeight;
    widthSize.textContent = window.innerWidth;
};

window.addEventListener("resize", reportResize)


// * double click
const h1El = document.querySelector("h1");
h1El.addEventListener("dblclick", ()=> h1El.style.color ="brown")



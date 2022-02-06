


const container = document.querySelector("#container");

container.addEventListener("click", function(){
    this.style.display = "none"
});


const colorBtn = document.querySelector("#colorBtn");

function newColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
};

colorBtn.addEventListener("click", e=>{
    e.stopPropagation();
    e.stopImmediatePropagation();
    // let Color = newColor();
    container.style.backgroundColor = newColor()
})

colorBtn.addEventListener("click", e =>{
    colorBtn.textContent = "You change me"
})
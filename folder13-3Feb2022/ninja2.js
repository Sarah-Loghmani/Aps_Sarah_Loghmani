const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", e=>{
    console.log(e.target);
    console.log("my content copied.");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", e =>{
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `X pose: ${e.offsetX} - Y pose: ${e.offsetY}`
});

document.addEventListener("wheel", e =>{
    // console.log(e);
    console.log(e.pageX, e.pageY);
})

const button = document.querySelector("button");

const popup = document.querySelector(".popup");

button.addEventListener("click", ()=>{
    console.log("hii");
    popup.style.display = "block";
})
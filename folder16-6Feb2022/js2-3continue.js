


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
});

// *event delegation:

let lis = document.querySelectorAll("li");
lis.forEach(li => {
    li.addEventListener("click", ()=>{
        li.remove()
    })
    
});

const tweetForm = document.querySelector("#tweetForm");
const tweetList = document.querySelector(".tweetsList");

tweetForm.addEventListener("submit", e =>{
    e.preventDefault()

    let usernameInput = e.target.userName;
    let tweetInput = e.target.tweet;

    if(!usernameInput || !tweetInput){
    
        alert("please fill the blanks")
        return;
    };

    const liEl = document.createElement("li");
    const bEl =document.createElement("b");

    bEl.textContent = usernameInput.value;
    liEl.append(bEl, `: ${tweetInput.value}`);
    tweetList.prepend(liEl);

    usernameInput.value = "";
    tweetInput.value = "";
});

tweetList.addEventListener("click", e =>{
    console.log(e.target);
    e.target.nodeName === "LI" && e.target.remove()
})


// *callBack function

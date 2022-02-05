
const form = document.querySelector("#tweetForm");
const ulEl = document.querySelector("#tweets");

const tweetInUl = (username, tweet) => {

    let liEl = document.createElement("li");
    let bEl =document.createElement("b");

    bEl.append(username);
    liEl.append( bEl, `: ${tweet}`);
    ulEl.append(liEl);
};

form.addEventListener("submit", e =>{
    // ! Default behavior !
    e.preventDefault()

    console.log(e);
    console.dir(form);
    // console.log(form.elements.username.value);//or
    console.log(e.target.username.value);//better way
    console.log(e.target.tweet.value);

    console.log("submitted");
    // --------------------------------------

    let usernameInput = e.target.username.value;
    let tweetInput = e.target.tweet.value;

    // ! if input is stayed empty
    if(!usernameInput || !tweetInput){
       return alert("please fille the blanks.")
    }else{
        alert("submitted")
    };

    tweetInUl(usernameInput, tweetInput);

    // ! for reset the inputs:
    e.target.username.value = "";
    e.target.tweet.value = "";
});



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

    // console.log(e);
    // console.dir(form);
    // console.log(form.elements.username.value);//or
    // console.log(e.target.username.value);//better way
    // console.log(e.target.tweet.value);

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


// * shopping list:
const shoppingForm = document.querySelector("#shoppingForm");
const list = document.querySelector("#list");

// const shoppingList = (product, quantity) => {
//     let liEl = document.createElement("li");
//     liEl.append(`${product}: ${quantity}`)
//     list.append(liEl);
// };

shoppingForm.addEventListener("submit", e => {
    e.preventDefault();

    let productInput = e.target.product.value;
    let quantityInput = e.target.quantity.value;

    // if(!productInput || !quantityInput){
    //     return alert("please fill the blanck.");
    // }else{
    //     alert("submitted");
    // };

    let liEl = document.createElement("li");
    liEl.append(`${productInput}: ${quantityInput}`);
    list.append(liEl);

    // shoppingList(productInput, quantityInput);

    productInput.value = "";
    quantityInput.value = "";
})

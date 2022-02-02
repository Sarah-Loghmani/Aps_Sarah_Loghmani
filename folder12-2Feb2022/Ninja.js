
let pEl = document.querySelectorAll("p");
console.log(pEl);

pEl.forEach(p =>{
    if(p.textContent.includes("error")){
        p.classList.add("error")
    }else if(p.textContent.includes("success")){
        p.classList.toggle("success")
    }
})

let spanClass = document.querySelector(".span");
// console.log(spanClass.innerText);// only visible text
// console.log(spanClass.innerHTML);
// console.log(spanClass.textContent);// all of the content

let article = document.createElement("article");

let h2El = document.createElement("h2");
h2El.innerText = "This is a test."
article.append(h2El)

let ulEl = document.createElement("ul");
// article.append(ulEl)

pEl.forEach(p => {
    // article.append(p)
    p.style.cursor = "pointer";

    let liEl = document.createElement("li");
    liEl.append(p)

    ulEl.append(liEl)
    article.append(ulEl)
    document.body.append(ulEl)
});

// console.log(ulEl.children);

let divEl = document.createElement("div");
divEl.innerText = "this is a div for test";
article.append(divEl);

document.body.appendChild(article);

console.log(article.children);//this is a htmlcollection

//* it is impossible to use foreach for htmlcollection so have to convert it to an array:
console.log(Array.from(article.children));//this is not distroctive.

Array.from(article.children).forEach(child => {
    console.log(child.innerText);
    child.style.color ="brown"
})

// * To understand the parentElement of an element:
console.log(spanClass.parentElement);
console.log(spanClass.parentElement.parentElement);
console.log(spanClass.nextElementSibling);
console.log(spanClass.previousElementSibling);//null => there is not any previous element

// * events



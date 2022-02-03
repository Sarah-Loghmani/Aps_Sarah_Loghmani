
let pEl = document.querySelectorAll("p");
console.log(pEl);

let article = document.createElement("article");

let h2El = document.createElement("h2");
h2El.innerText = "This is a test."
article.append(h2El)
document.body.append(article);

let ulEl = document.createElement("ul");

pEl.forEach(p =>{

    if(p.textContent.includes("error")){
        p.classList.add("error")
    }
    if(p.textContent.includes("success")){
        p.classList.toggle("success")
    }

    let liEl = document.createElement("li");
    liEl.append(p);
    ulEl.append(liEl);
    article.append(ulEl);

})

let spanClass = document.querySelector(".span");
// console.log(spanClass.innerText);// only visible text
// console.log(spanClass.innerHTML);
// console.log(spanClass.textContent);// all of the content

// console.log(ulEl.children);

let divEl = document.createElement("div");
divEl.innerText = "this is a div for test";
article.append(divEl);

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
let button=document.createElement("button");
button.innerText = "Click me";
article.append(button);

button.addEventListener("click", () =>{
//   console.log("you click on me");
  // console.log(e);

//   ulEl.innerHTML += `<li><p>new list</p></li>`;//this is appended from end by default.
  // or
  let p = document.createElement("p");
  let li = document.createElement("li");
  p.textContent = "new list2";
  li.append(p);
  ulEl.append(li);
//   To adding the element from first of parrent:
//   ulEl.prepend(li);
});



// console.log((ulEl.children));

// cause liEl is not defind in global scope i can't use it so:
(Array.from(ulEl.children)).forEach(li => {
li.addEventListener("click", e => {
  // console.log(e);
//   console.log(e.target); //best practice
  // console.log(p);// not best

  e.target.style.textDecoration = "line-through";
  e.stopPropagation()

  // *remove elements
  li.remove()//not best practice
  e.target.remove()//best practice
})
})

//* event bubbling
ulEl.addEventListener("click", e => {
    console.log("ulEl event");
    e.target.remove();
    if(e.target.tagName === "LI"){
        e.terget.remove();
    }
} )

// button.addEventListener("click", ()=>{

//     // ulEl.innerHTML += `<li><p>new list</p></li>`;//this is appended from end by default. and don't let to run the event that is added to its sibling elements.
//     // or
//     let p = document.createElement("p");
//     let li = document.createElement("li");
//     p.textContent = "new list2"
//     li.append(p)
//     ulEl.append(li);
//     // To adding the element from first of parrent:
//     // ulEl.prepend(li);
// })


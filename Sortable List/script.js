const draggableList = document.getElementById("draggableList"); // ul
const check = document.getElementById("check"); //button

const strongestAnimal = [
  "Dung Beetle",
  "Rhinoceros Beetle",
  "Leafcutter ant",
  "Gorilla",
  "Eagle",
  "Tiger",
  "Musk Ox",
  "Elephant",
  "Anaconda",
  "Grizzly bear",
];

//store list items
const listItems = [];

let dragStartIndex;

creatList();

//Insert list items into DOM
function creatList() {
  [...strongestAnimal]
  .map(a=> ({value:a, sort: Math.random()}))
  .sort((a, b)=> a.sort-b.sort)
  .map(a=>a.value)
  .forEach((animal, index) => {
    // console.log(animal);
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `
            <span class='number'>${index + 1}</span>
            <div class='draggable' draggable="true">
                <p class="animalName">${animal}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;
    listItems.push(listItem);
    draggableList.appendChild(listItem);
  });
  console.log(listItems);
  addEventListener()
};


function addEventListener(){
  const draggables=document.querySelectorAll('.draggable');
  const draggableItems = document.querySelectorAll(".draggableList li");

  draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart', dragStart)
  })

  draggableItems.forEach(item=>{
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener("drop", dragDrop);
  });

  check.addEventListener('click', checkOrder);
}


//drag functions
function dragStart() {
  // console.log('dragStart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex);
}
function dragEnter() {
  // console.log('dragEnter');
  this.classList.add('over')
}
function dragOver(e) {
  // console.log('dragOver');
  this.classList.add("over");
  e.preventDefault();
}
function dragLeave() {
  // console.log('dragLeave');
  this.classList.remove('over')
}
function dragDrop() {
  // console.log('dragDrop');
  const dragEndIndex= +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over')
}

// swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  // console.log(itemOne, itemTwo);
  listItems[fromIndex].append(itemTwo);
  listItems[toIndex].append(itemOne);
}

//check the order of list items  
function checkOrder(){
  listItems.forEach((listItem, index)=>{
    const animalName = listItem.querySelector('.draggable').innerText.trim()

    if(animalName !== strongestAnimal[index]){
      listItem.classList.add('wrong') 
    }else{
      listItem.classList.remove('wrong')
      listItem.classList.add("right");
    }
  })
  
}
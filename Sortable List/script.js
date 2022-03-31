const draggableList = document.getElementById("draggableList");
const check = document.getElementById("check");

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
  [...strongestAnimal].forEach((animal, index) => {
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
}

const fill= document.querySelector('.fill');
const empties= document.querySelectorAll('.empty');

//Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener("drop", dragDrop);
}

//drag functions
function dragStart(){
    console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = "invisible"));
    
}

function dragEnd(){
    console.log("end");
    this.className = "fill";

}

function dragEnter(e){
    e.preventDefault()
    console.log('enter');
    this.className += ' hovered';
};
function dragOver(e){
    e.preventDefault();
    console.log("over");
    
};
function dragLeave(e){
    console.log("leave");
    this.className = "empty"
    
};
function dragDrop(){
    console.log("drop");
    this.className = "empty"
    this.append(fill)

};
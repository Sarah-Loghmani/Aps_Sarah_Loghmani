const id = new URLSearchParams(window.location.search).get('id');
// number of id seat in the value of (window.location.search)variable;

window.addEventListener('DOMContentLoaded', ()=> renderDetails())

const container = document.querySelector('.details')
const renderDetails = async()=>{
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    console.log(post);

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        
    `

    container.innerHTML = template;
}
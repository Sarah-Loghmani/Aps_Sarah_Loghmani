//* json server is a package we install on computer with npm install

//* in the https://www.npmjs.com/ search "json server", scroll down and copy "npm install -g json-server" 
//* in the command prompt pate it and press enter; it is installed on pc;
//*in the db.json file open terminal and write "json-server --watch data/db.json" and then press enter;


//*first of all we attach an eventListener to window to waiting until webpage is ready:

window.addEventListener("DOMContentLoaded", ()=> renderPosts());

const container = document.querySelector('.blogs');

const renderPosts = async ()=>{
    let uri = "http://localhost:3000/posts";
    const response = await fetch(uri);
    // console.log(response);
    const posts = await response.json();
    console.log(posts);
    //want to output them in the dom
    let template="";
    posts.forEach(post=>{
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 500)}</p>
                <a href="details.html?id=${post.id}">read more...</a>
            </div>
      
            `
    })
    container.innerHTML = template 
} 

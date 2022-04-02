/*
 similarities between Cookies and Local Storage and Session Storage :
    1- all are being stored on the user's actual browser that they're using; such as google chrome or firefox so on.(and they are not available in the other browsers)
    2.users do not share cookies and local storage between them. none of the other users of a site will be able to see the local storage of a certain user;

    difference between them:
    cookies is a bit older and quite different than the other .
    1.cookies can store information for four kb.(because cookies send all the requests of the users to the server and don't need to be stored the information)
      local storage hold 10 mb;
      session storage hold 5 mb;
    2.cookies and local storage are available in all tabs that have opened for a website, but session storage is available in the single tab that has opened;
    3.session storage is for that one browsing session and is removed as soon as the user closes the tab where that session was set;
    but local storage is around forever until the ends up deleting it or you delete it yourself inside of the code 
    and cookies you have to set when they expire;
    you can set an infinite expiration or in a certain timeframe.
    4.for storing something in the user's browser you're use local or session storage
    but for sending it to the server use cookies
*/
//* example'
//* local storage & session storage
localStorage.setItem('name', 'John');//if you remove this line local storage items is still in there until you close the browser
console.log(localStorage.getItem('name'));
// for completely removing the items:
localStorage.removeItem('name')


sessionStorage.setItem('name', 'bob');
sessionStorage.getItem('name');
// for updating the value of keys :
sessionStorage.setItem('name', 'sarah')
sessionStorage.removeItem('name')


//*cookies :
document.cookie = 'name = sarah; expires = ' + new Date(9000,07,01).toUTCString()
document.cookie = "last name = loghmani; expires = " + new Date(9000, 07, 01).toUTCString();
  console.log(document.cookie);
  
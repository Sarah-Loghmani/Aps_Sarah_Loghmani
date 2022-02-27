// class User{
//     constructor(name, email, password){
        
//             this.name = name;
//             this.email = email;
//             this.password = password;
//     };
//     login(){

//         console.log(this.name + " Logged in");
//         return this;// for chaining methods
//     };
//     logout(){
         
//          console.log(this.name + " Logged out");
//          return this;//for chaining methods
//     };


// }

// *syntax sugar

function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
    this.login=function(){

        console.log(this.name + " Logged in");
        return this;// for chaining methods
    };
    this.logout = function(){
         
         console.log(this.name + " Logged out");
         return this;//for chaining methods
    };
}
const user1 = new User('Sarah Loghmani', 'sara@mail.com','123456');
const user2 = new User("Shokat Etemadi", "shokat@mail.com", "123456");
console.log(user1, user2);
// user1.login();
// user1.logout();
// user2.login();
// user2.logout();
//* chain methods: we have to return this to the methods.
user1.login().logout();
user2.login().logout();

// *subclasses

class Admin extends User {
    constructor(name, email, password, title){
        super(name, email, password)
        this.title = title
    }

    deleteUser(user) {
       users= users.filter( u => u.name !== user.name)

    }
 
}

const user3 = new User('Rahman Ajory', 'Raman.mail.com', 95484)

let users =[user1,user2, user3];
console.log(users)
 
const admin = new Admin('Iran Daroodi', 'Iran.mail.com', 95484, 'painter');

admin.deleteUser(user2)
console.log(admin);
console.log(users)

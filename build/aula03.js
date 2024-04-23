"use strict";
class User {
    id = null;
    name = null;
    email = null;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
let newUser = new User(1, 'Leandro', 'leandrocardosodev@gmail.com');
console.log(newUser.id, newUser.name, newUser.email);

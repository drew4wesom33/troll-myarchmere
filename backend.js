var password ='';
var email ='';

const userList = [];

function addUser() {
    const user = [{userEmail:document.getElementById('emailForm'), userPassword:document.getElementById('passwordForm')}]
    userList.push(user);
}

document.getElementById('signInButton').addEventListener('click', addUser());

console.log('hello');
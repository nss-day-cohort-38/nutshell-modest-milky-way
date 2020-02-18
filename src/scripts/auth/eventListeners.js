import usersAPI from "./api.js"

const createAccount = document.getElementById("createAccount");
const userDiv = document.getElementById("user__div");


const User = {
    createRegistrationForm() {

createAccount.addEventListener("click", (event) => {
    userDiv.innerHTML += `<fieldset>username: <input type="text" id="username"></fieldset>
    <fieldset>email: <input type="text" id="email"></fieldset>
    <button id="createUserButton">Create User</button>`

    this.createUserButtonListener();

})
},
        createUserButtonListener() {
            const username = document.getElementById("username");
            const email = document.getElementById("email");
            const createUserButton = document.getElementById("createUserButton");
            createUserButton.addEventListener("click", (event) => {
                const newUser= {
                    "username": username.value,
                    "email": email.value
                }
                console.log(newUser);
                usersAPI.getAllUsers().then(users => {
       
                let filteredUsers = users.filter(user => username.value === user.username);
                console.log(filteredUsers);

                if (filteredUsers.length === 0) { 
                    usersAPI.addNewUser(newUser)
                

                }
                else {
                    window.alert("username or email is already taken")
                  

                }
    
                })
})
        }
    }

export default User
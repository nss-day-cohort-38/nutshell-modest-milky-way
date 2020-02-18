import usersAPI from "./api.js"

const createAccount = document.getElementById("createAccount");
const userDiv = document.getElementById("user__div");


const User = {
    createRegistrationForm() {

        createAccount.addEventListener("click", (event) => {
            userDiv.innerHTML += `<fieldset id="field1">username: <input type="text" id="username"></fieldset>
    <fieldset id="field2">email: <input type="text" id="email"></fieldset>
    <button id="createUserButton">Create User</button>`

            this.createUserButtonListener();

        })
    },
    createUserButtonListener() {
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const createUserButton = document.getElementById("createUserButton");
        createUserButton.addEventListener("click", (event) => {
            const newUser = {
                "username": username.value,
                "email": email.value
            }
            usersAPI.getAllUsers().then(users => {

                let filteredUsers = users.filter(user => username.value === user.username);

                if (filteredUsers.length === 0) {

                    usersAPI.addNewUser(newUser)
                    .then(newUser => { 
                         sessionStorage.setItem("activeUser", newUser.id);
                         userDiv.style.display = 'none';
                        const showLoggedInUser = document.getElementById("showLoggedInUser");
                        showLoggedInUser.innerHTML += `${newUser.username} is logged in`;              
                });
                }
                else {
                    window.alert("username or email is already taken")
                }

            }).then(this.setActiveUser)
        })
    },
    setActiveUser() {


            // userDiv.style.display = 'none';
            // const showLoggedInUser = document.getElementById("showLoggedInUser");
            // showLoggedInUser.innerHTML += `${newUser.username} is logged in`;

        
    }
}

export default User
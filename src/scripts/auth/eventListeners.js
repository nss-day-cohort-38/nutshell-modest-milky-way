import usersAPI from "./api.js"

const createAccount = document.getElementById("createAccount");
const logoutUser = document.getElementById("logoutUser");
const userDiv = document.getElementById("user__div");



const User = {
    clearForm() {

        email.value = "";
        username.value = "";
    },
    createRegistrationForm() {

        createAccount.addEventListener("click", (event) => {
            userDiv.innerHTML += `<fieldset id="field1">username: <input type="text" id="username"></fieldset>
    <fieldset id="field2">email: <input type="text" id="email"></fieldset>
    <button id="createUserButton">Create User</button> <button id="loginUserButton">Login</button>`

            this.createUserButtonListener();
            this.loginUser();
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
                    window.alert("Username or email is already taken")
                }

            }).then()
        })
    },
    loginUser() {

        const loginUserButton = document.getElementById("loginUserButton");
        loginUserButton.addEventListener("click", (event) => {


            usersAPI.getAllUsers().then(users => {

                let filteredUser = users.filter(user => username.value === user.username);

                if (filteredUser.length !== 0) {
                    sessionStorage.setItem("activeUser", filteredUser[0].id);
                    userDiv.style.display = 'none';
                    const showLoggedInUser = document.getElementById("showLoggedInUser");
                    showLoggedInUser.innerHTML += `${filteredUser[0].username} is logged in`;
                }
                else {
                    window.alert("Couldn't find your Nuthsell account")
                }
            })


        })
    },
    logoutUser() {
        logoutUser.addEventListener("click", (event) => {


            const showLoggedInUser = document.getElementById("showLoggedInUser");
            showLoggedInUser.innerHTML = "";

            sessionStorage.clear();
            userDiv.style.display = 'block';
            this.clearForm();

        })

    }
}

export default User
import usersAPI from "./api.js"

const createAccount = document.getElementById("createAccount");
const userDiv = document.getElementById("user__div");


const User = {
    createRegistrationForm() {

        createAccount.addEventListener("click", (event) => {
            userDiv.innerHTML += `<fieldset id="field1">username: <input type="text" id="username"></fieldset>
    <fieldset id="field2">email: <input type="text" id="email"></fieldset>
    <button id="createUserButton">Create User</button> <button id="loginUserButton">Login</button>`

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
            })

            // }).then(this.setActiveUser(filteredUsers[0].id))
        // }).then(this.setActiveUser())
        })
    },
    setActiveUser() {
        usersAPI.getAllUsers().then(users => {

            // let filteredUser = users.filter(user => username.value === user.username);
            // console.log(filteredUser[0].id)
            // const loginUserButton = document.getElementById("loginUserButton");
            // loginUserButton.addEventListener("click", (event) => {
            //     console.log(filteredUser[0].id);
            //     sessionStorage.setItem("activeUser", filteredUser[0].id);
            // });


            // userDiv.style.display = 'none';
            // const showLoggedInUser = document.getElementById("showLoggedInUser");
            // showLoggedInUser.innerHTML += `${newUser.username} is logged in`;

        })
    }
}

export default User
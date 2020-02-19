import friendsApiManager from './apiManager.js'
import usersAPI from '../auth/api.js'

const friendsFormValidation = {
    //TODO:
    saveFriend(email) {
        usersAPI.getAllUsers()
            .then(users => {
                let match = false
                console.log("users", users)
                const filteredUsers = users.filter(friend => friend.email === email);
                console.log("filtered", filteredUsers);
                if(filteredUsers) {
                    match = true
                } 
            })
        //DOES USER Exist?
        //DOES Friendship exist?
    }
}

export default friendsFormValidation

/*

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

*/
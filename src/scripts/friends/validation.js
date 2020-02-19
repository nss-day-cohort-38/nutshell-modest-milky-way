import friendsApiManager from './apiManager.js'
import usersAPI from '../auth/api.js'

const friendsFormValidation = {
    //TODO:
    //DOES USER Exist?
    //DOES Friendship exist?
    allValidations (email) {
        // IS THE EMAIL ON RECORD?
        return friendsFormValidation.isUser(email).then((resp) => {
            
            // If the response has zero length, it is false
            // because there is no user with that email
            if (resp.length) {
                const user = resp[0];
                // console.log("response", user)
                // console.log("response id", user.id)
                console.log("there is a user by that name, proceed")
                return user.id

                //TODO: ARE THEY YOU?

                // ARE THEY ALREADY FRIENDS?
                // TODO: get this working when notAlreadyFriends is working
                // friendsFormValidation.notAlreadyFriends(user.id).then((resp) => {
                //     console.log("notAlreadyFriends response:", resp)
                //     if (resp !== {}) {
                //         return resp
                //     } else {
                //         alert("you're already friends with that user")
                //     }
                // })
            } else {
                alert("there's no user by that name")
            }
        })
    },
    isUser (email) {
        return usersAPI.getAllUsers()
            .then(users => {
                const filtered = users.filter(friend => friend.email === email);
                // console.log(filtered);
                return filtered;
            })
    },
    // TODO: NEED THIS TO WORK
    // notAlreadyFriends (user) {
    //     if (user !== undefined) {
    //         // console.log("user", user)
    //         // Will return a blank object if there is no friendship
    //         return friendsApiManager.getFriendship(user.id)
    //     } else {
    //         // Will retur a blank object if there is no user...
    //         return {}
    //     }
    // }
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
import friendsApiManager from './apiManager.js'
import usersAPI from '../auth/api.js'

const friendsFormValidation = {
    allValidations (email) {
        // IS THE EMAIL ON RECORD?
        return friendsFormValidation.isUser(email).then((resp) => {
            // If the response has zero length, it is false
            // because there is no user with that email
            if (resp.length) {
                // If it has a length, it is a length of one, 
                // so make the user index 0
                const user = resp[0];

                return friendsFormValidation.notAlreadyFriends(user.id).then((resp) => {
                    // If the response has zero length,
                    // then they are not already friends
                    if (resp.length === 0) {
                        return user.id;
                    } else {
                        alert("You're already friends")
                        return false
                    }
                });

                //TODO: ARE THEY YOU?
            } else {
                alert("there's no user by that name")
                return false
            }
        })
    },
    isUser (email) {
        return usersAPI.getAllUsers()
            .then(users => {
                const filtered = users.filter(friend => friend.email === email);
                return filtered;
            })
    },
    notAlreadyFriends (userId) {
        return friendsApiManager.getFriendList()
            .then(friendships => {
                const filtered = friendships.filter(friendship => friendship.userId === userId);
                return filtered
            })
    }
}

export default friendsFormValidation
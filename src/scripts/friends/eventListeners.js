import friendsApiManager from './apiManager.js';
import friendsDomManager from './domManager.js';
import friendsFormValidation from './validation.js';

const friendsEventListeners = {
    addFriendsEventListener() {
        const wrapper = document.getElementById("wrapper");

        wrapper.addEventListener("click", (e) => {
            // IF A BUTTON
            if (e.target.id.split("__")[1] === "button") {
                const btnType = e.target.id.split("__")[0];
                // NEW FRIEND BUTTON
                if (btnType === "friend-new") {
                    friendsDomManager.form.renderNewFriendshipForm();
                }
                // SAVE FRIEND
                else if (btnType === "friend-save") {
                    const formValue = document.getElementById("new-friend-name__field").value
                    document.getElementById("new-friend-name__field").value = "";
                    friendsFormValidation.allValidations(formValue)
                        // .then((resp) => console.log("FINAL RESPONSE", resp))
                        .then((userId) => {
                            // Workaround for times when validation fails,
                            // to keep from POSTING an incomplete object:
                            if (userId) {
                                friendsApiManager.saveFriendship(friendsApiManager.makeFriendshipObject(userId))   
                            }
                        }).then(friendsDomManager.friendships.refreshFriendsList)
                        .then(friendsDomManager.form.destroyForm);
                
                        // friendApiManager.saveFriend(friend)
                        //     .then(friendsDomManager.friendships.refreshFriendsList)
                        //     .then(friendsDomManager.form.destroyForm)
                    // } else {
                    //     alert("Please enter valid user email");
                    // }
                }
                else if (btnType === "friend-delete") {
                    const btnId = e.target.id.split("__")[2];
                    const response = confirm("Are you sure you want to delete this friendship?")
                    if (response) {
                        friendsApiManager.deleteFriendship(btnId)
                            .then(friendsDomManager.friendships.refreshFriendsList);
                    }
                }
            }
        })
    }
}

export default friendsEventListeners
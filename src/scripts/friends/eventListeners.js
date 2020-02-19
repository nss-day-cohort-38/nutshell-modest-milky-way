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
                    friendDomManager.form.renderNewForm();
                }
                // SAVE FRIEND
                else if (btnType === "friend-save") {
                    const friend = friendApiManager.makeFriendObject();
                    if (friendFormValidation.saveFriend(friend)) {
                        friendApiManager.saveFriend(friend)
                            .then(friendDomManager.friendships.refreshFriendsList)
                            .then(friendDomManager.form.destroyForm)
                    } else {
                        alert("Please fill out all required fields");
                    }
                }
            }
        })
    }
}
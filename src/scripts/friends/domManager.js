import friendsHtmlFactory from './htmlFactory.js'
import friendsApiManager from './apiManager.js'

const friendsDomManager = {
    form: {
        renderNewFriendshipForm() {
            const container = document.querySelector("#friend-form__div");
            let html = friendsHtmlFactory.form.makeHtml();
            container.innerHTML = html
        },
        destroyForm() {
            const container = document.querySelector("#friend__form");
            //A workaround for times when the form is already gone...
            if (container) {
                container.remove();
            }
        }
    },
    friendships: {
        renderFriendsList (friends) {
            const container = document.querySelector("#friends__div");
            container.innerHTML = "<h2>Friend List</h2>";
            container.innerHTML += `<button class="friend-new__button" id="friend-new__button">Add New Friend</button>`
            friends.forEach(friend => {
                let html = friendsHtmlFactory.friend.makeHtml(friend);
                container.innerHTML += html;
            })
        },
        refreshFriendsList () {
            return friendsApiManager.getFriendList()
                .then((allFriends) => {
                    // Filtering out any friendships that are not the active user's
                    const currentUserId = parseInt(sessionStorage.getItem("activeUser"));
                    return allFriends.filter(friendship => friendship.currentUserId === currentUserId)
                })
                .then(friendsDomManager.friendships.renderFriendsList)
        }
    }
}

export default friendsDomManager;
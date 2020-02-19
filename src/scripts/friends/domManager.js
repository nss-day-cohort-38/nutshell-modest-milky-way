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
            container.innerHTML = "";
            friends.forEach(friend => {
                let html = friendsHtmlFactory.friendships.makeHtml(friend);
                container.innerHTML += html;
            })
        },
        refreshFriendsList () {
            return friendsApiManager.getArticles()
                .then(friendsDomManager.friendships.renderFriendsList)
        }
    }
}
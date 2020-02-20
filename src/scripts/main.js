import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import friendsDomManager from './friends/domManager.js'
import friendsEventListener from './friends/eventListeners.js'
import renderMessages from "./messages/render.js"
import messagesEvents from "./messages/eventListeners.js"
import User from "./auth/eventListeners.js"
import eventListeners from "./events/eventListeners.js"
import renderEventCard from './events/eventCardRenderDom.js'
import eventAPI from './events/apiEventManager.js'

const authRefresh = () => {
    //MASTER DOM RENDERERER INVOKED AT LOGIN/LOGOUT

    //FRIENDS
    friendsDomManager.friendships.refreshFriendsList();

    //EVENTS
    eventAPI.getEvents().then(renderEventCard)
    //TASKS

    //ARTICLES
    articlesDomManager.article.refreshArticles();

    //CHAT
    renderMessages.renderAllMessages();

}

//HTML Master
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

authRefresh();

// EVENT LISTENERS:
eventListeners.addCreateEventListener()
friendsEventListener.addFriendsEventListener();
eventListeners.addCreateEventListener();
articlesEventListeners.addArticlesEventListener(); 
messagesEvents.addSaveButtonListener();
messagesEvents.addEditButtonListeners();

//USERS
User.createRegistrationForm();
User.logoutUser();
User.getUser();

//FIXME:
// have session storage populate from 
// user login application in-development

export default authRefresh
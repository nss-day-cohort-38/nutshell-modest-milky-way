import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import friendsDomManager from './friends/domManager.js'
import friendsEventListener from './friends/eventListeners.js'
import renderMessages from "./messages/render.js"
import messagesEvents from "./messages/eventListeners.js"
import User from "./auth/eventListeners.js"

//EVENTS
import eventListeners from "./events/eventListeners.js"
eventListeners.addCreateEventListener()

//TASKS

//HTML Master
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

//ARTICLES
articlesDomManager.article.refreshArticles();
articlesEventListeners.addArticlesEventListener(); 

//CHAT
renderMessages.renderAllMessages();
messagesEvents.addSaveButtonListener();
messagesEvents.addEditButtonListeners();

//USERS
User.createRegistrationForm();
User.logoutUser();
User.getUser();

//FIXME:
// have session storage populate from 
// user login application in-development

//FRIENDS
friendsDomManager.friendships.refreshFriendsList();
friendsEventListener.addFriendsEventListener();
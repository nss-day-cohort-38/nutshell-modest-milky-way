import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"

//FIXME:
// have session storage populate from 
// user login application in-development
sessionStorage.setItem("activeUser", 1);

//HTML Master
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

//ARTICLES
articlesDomManager.article.refreshArticles();
articlesEventListeners.addArticlesEventListener(); 

//CHAT
render.renderAllMessages();
events.addSaveButtonListener();
events.addDeleteAndEditButtonListeners();

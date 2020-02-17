import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"

//HTML Master
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

//ARTICLES
articlesDomManager.article.refreshArticles();
articlesDomManager.form.renderForm();
articlesEventListeners.addArticlesEventListener(); 

//CHAT
render.renderAllMessages();
events.addSaveButtonListener();
events.addDeleteAndEditButtonListeners();

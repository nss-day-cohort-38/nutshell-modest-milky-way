import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"

//HTML Master
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

//ARTICLES
// Hacky if statement to keep these scripts 
// from running on the wrong page, 
// by getting the current url
if (window.location.href.split("/")[4] === "index.html") {
    articlesDomManager.article.refreshArticles();
    articlesDomManager.form.renderForm();
    articlesEventListeners.addArticlesEventListener(); 
}

//CHAT
if (window.location.href.split("/")[4] === "chat.html") {
    render.renderAllMessages();
    events.addSaveButtonListener();
    events.addDeleteAndEditButtonListeners();
}

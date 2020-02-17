import htmlMaster from './htmlMaster.js'
import renderMessages from "./messages/render.js"
import messagesEvents from "./messages/eventListeners.js"

htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

renderMessages.renderAllMessages();
messagesEvents.addSaveButtonListener();
messagesEvents.addDeleteAndEditButtonListeners();
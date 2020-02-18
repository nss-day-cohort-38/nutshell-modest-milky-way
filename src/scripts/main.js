import htmlMaster from './htmlMaster.js'
import renderMessages from "./messages/render.js"
import messagesEvents from "./messages/eventListeners.js"
import User from "./auth/eventListeners.js"

htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

renderMessages.renderAllMessages();
messagesEvents.addSaveButtonListener();
messagesEvents.addEditButtonListeners();
User.createRegistrationForm();

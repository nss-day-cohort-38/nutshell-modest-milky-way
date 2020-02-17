import htmlMaster from './htmlMaster.js'
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"

htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

render.renderAllMessages();
events.addSaveButtonListener();
events.addDeleteAndEditButtonListeners();
//htmlMaster main
import htmlMaster from './htmlMaster.js'
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();
//events main 
import eventListeners from "./events/eventListeners.js"
eventListeners.addCreateEventListener()
//messages main 
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"
render.renderAllMessages();
events.addSaveButtonListener();
events.addDeleteAndEditButtonListeners();

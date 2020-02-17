//htmlMaster main
import htmlMaster from './htmlMaster.js'
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();
//events main 
import events from "./events/eventListeners.js"
events.addCreateEventListener()
//messages main 
import render from "./messages/render.js"
import events from "./messages/eventListeners.js"
render.renderAllMessages();
events.addSaveButtonListener();
events.addDeleteAndEditButtonListeners();

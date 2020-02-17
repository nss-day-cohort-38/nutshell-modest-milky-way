//htmlMaster main
import htmlMaster from './htmlMaster.js'
htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();
//events main 
import events from "./events/eventListeners.js"
events.addCreateEventListener()

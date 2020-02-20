
import taskEvents from './tasks/saveTasks.js';
import renderTasks from './tasks/tasksDOM.js';
import tasksAPI from './tasks/tasksData.js';





tasksAPI.getAllTasks().then(tasks => renderTasks(tasks));

taskEvents.addTasksSaveEventListener();
taskEvents.addTasksEditEventListener();
taskEvents.tasksDeleteEventListener();

//htmlMaster main
import htmlMaster from './htmlMaster.js'
import articlesDomManager from './articles/domManager.js'
import articlesEventListeners from './articles/eventListeners.js'
import renderMessages from "./messages/render.js"
import messagesEvents from "./messages/eventListeners.js"
import User from "./auth/eventListeners.js"

//EVENTS
import eventListeners from "./events/eventListeners.js"
import renderEventCard from './events/eventCardRenderDom.js'
import eventAPI from './events/apiEventManager.js'
eventAPI.getEvents().then(renderEventCard)
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

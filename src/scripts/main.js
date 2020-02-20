import htmlMaster from './htmlMaster.js';
import taskEvents from './tasks/saveTasks.js';
import renderTasks from './tasks/tasksDOM.js';
import tasksAPI from './tasks/tasksData.js';





tasksAPI.getAllTasks().then(tasks => renderTasks(tasks));

taskEvents.addTasksSaveEventListener();
taskEvents.addTasksEditEventListener();
taskEvents.tasksDeleteEventListener();


htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();
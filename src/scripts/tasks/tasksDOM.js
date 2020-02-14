import makeTasksComponent from "./tasks/tasksComponent.js"
const renderTasks = (submissions) => {
   
    const loggedTasks= document.querySelector("");
    
    const clearForm = document.querySelector("");
    clearForm.innerHTML="";

    for (let i = 0; i < submissions.length; i++) {
        const userInput = submissions[i]
        loggedTasks.innerHTML += makeTasksComponent(userInput)
    }


}

export default renderTasks

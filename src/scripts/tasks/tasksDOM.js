import makeTasksComponent from "./tasksComponent.js"

const renderTasks = (submissions) => {
   
    const loggedTasks= document.querySelector(".taskArticle");

    loggedTasks.innerHTML="";

    for (let i = 0; i < submissions.length; i++) {
        const userInput = submissions[i]
        loggedTasks.innerHTML += makeTasksComponent(userInput)
    }


}

export default renderTasks

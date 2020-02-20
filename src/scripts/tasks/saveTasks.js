import tasksAPI from "./tasksData.js";
import renderTasks from "./tasksDOM.js";

const updateTaskFields = taskId => {
    fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(response => response.json())
        .then(task => {
            


            let taskName = document.querySelector("#taskName");
            let expectedCompletion = document.querySelector("#expectedCompletion");
            let isCompleted = document.querySelector("#isCompleted");
            const user = sessionStorage.getItem("activeUser");
            const activeUser = parseInt(user);

            //if (activeUser === task.userId) {
            hiddenTaskId.value = task.id;
            taskName.value = task.taskName;
            expectedCompletion.value = task.expectedCompletion;
            isCompleted.checked = task.isCompleted;
           // }
            //else {

                
            //}
        });
}

const taskEvents = {


    addTasksSaveEventListener: () => {
        const saveButton = document.querySelector("#submit");

        saveButton.addEventListener("click", () => {
            
            let userInput = {
                taskName: document.querySelector("#taskName").value,
                expectedCompletion: document.querySelector("#expectedCompletion").value,
                isComplete: document.querySelector("#isCompleted").checked
            }

            if (hiddenTaskId.value !== "") {

                userInput.id = parseInt(hiddenTaskId.value);
                tasksAPI.editTask(userInput)
                .then(tasksAPI.getAllTasks)
                    .then(renderTasks)
            }
            else {
                tasksAPI.addTask(userInput)
                    .then(tasksAPI.getAllTasks)
                     .then(renderTasks) 
            }
        })



    },

    addTasksEditEventListener: () => {

        const editContainer = document.querySelector(".taskArticle");
        editContainer.addEventListener("click", event => {
            if (event.target.id.startsWith("editTask--")) {
                const taskIdToEdit = event.target.id.split("--")[1]

                

                tasksAPI.updateFormFields(taskIdToEdit)
            }
        })

    },



    tasksDeleteEventListener: () => {

        const deleteButton = document.querySelector(".taskArticle");

        deleteButton.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteTask--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const taskIdToDelete = deleteBtnArray[1];

                //const taskId = event.target.id.split("--")[1]

                tasksAPI.deleteTask(taskIdToDelete)
                    .then(tasksAPI.getAllTasks)
                    .then(renderTasks);
            }

            else if (event.target.id.startsWith("editTask--")) {
                const taskIdToEdit = event.target.id.split("--")[1]

                updateTaskFields(taskIdToEdit)
            }
        })
    }



}



export default taskEvents
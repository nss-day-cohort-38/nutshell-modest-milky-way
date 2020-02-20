
const baseURL = "http://localhost:8088/tasks"

const tasksAPI = {

    getAllTasks() {
        return fetch(`${baseURL}`)
            .then(response => response.json());
    },

    addTask(task) {
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
    },




    editTask(userInput) {
    //  const updatedTask = {
    //         id: document.querySelector("#hiddenTaskId").value,
    //         taskName: document.querySelector("#taskName").value,
    //         expectedCompletion: document.querySelector("#expectedCompletion").value,
    //         isCompleted: document.querySelector("#isCompleted").value,
    //     }

        
       return fetch(`http://localhost:8088/tasks/${userInput.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInput)
        })
            .then(res => res.json())
          
    },

    updateFormFields(taskId) {

        const hiddenTaskId = document.querySelector("#hiddenTaskId")
        const taskNameInput = document.querySelector("#taskName")
        const taskDateInput = document.querySelector("#expectedCompletion")
        const taskCompletionInput = document.querySelector("#isCompleted")


        return fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(response => response.json())
            .then(task => {

                hiddenTaskId.value = task.id
                taskNameInput.value = task.taskName
                taskDateInput.value = task.expectedCompletion
                taskCompletionInput.value = task.isCompleted

            })
    },

    deleteTask(taskId) {
        
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"

        })

    }

}

export default tasksAPI

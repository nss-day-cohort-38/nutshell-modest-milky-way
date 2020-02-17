import api from "./tasksData.js"
import renderTasks from "./tasksDOM.js";

const addTasksSaveEventListener = () => {
    const saveButton = document.querySelector("#submit");

    saveButton.addEventListener("click", () => {
        let userInput = {
            taskName: document.querySelector("#taskName").value,
            expectedCompletion: document.querySelector("#expectedCompletion").value,
            isComplete: document.querySelector("#isCompleted").value

        }

        api.addEntry(userInput)
            .then(api.getAllEntries)
            .then(renderTasksData)
    }


    );
}

export default addTasksSaveEventListener
const addSaveEventListener = () => {
    const saveButton = document.querySelector("#submit");

    saveButton.addEventListener("click", () => {
        let userInput = {
            id: document.querySelector("#id").value,
            userId: document.querySelector("userId").value,
            task: document.querySelector("#task").value,
            completed: document.querySelector("#completed").value
        }

        api.addEntry(userInput)
            .then(api.getAllEntries)
            .then(renderEntries) 
    }


    );
}

export default addSaveEventListener

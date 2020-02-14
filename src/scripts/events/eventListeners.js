import renderEventForm from "./eventFormDom.js"
import eventAPI from "./apiEventManager.js"

const createButton = document.querySelector("#createEvent")

const events = {
    addSaveEventListener() {
        createButton.addEventListener("click", () => {
            renderEventForm()
        })
}
}

export default events
import renderEventForm from "./eventFormDom.js"
import eventAPI from "./apiEventManager.js"
import renderEventCard from "./eventCardRenderDom.js"

const wrapper = document.querySelector("#wrapper")


const events = {
    addCreateEventListener() {
        wrapper.addEventListener("click", (event) => {
            console.log(event.target.id)
            if(event.target.id === "createEvent") {
            renderEventForm()
            } if(event.target.id === "saveNewEvent") {
                const nameInput = document.querySelector("#eventName")
                const dateInput = document.querySelector("#eventDate")
                const locationInput = document.querySelector("#eventLocation")
                const newEvent = {
                    "name": nameInput.value, 
                    "date": dateInput.value, 
                    "location": locationInput.value, 
                }
                console.log(newEvent)
                /* eventAPI.saveEvents(newEvent).then(eventAPI.getEvents).then(renderEventCard) */
            }
        })
}
}

export default events
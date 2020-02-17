import renderEventForm from "./eventFormDom.js"
import eventAPI from "./apiEventManager.js"
import renderEventCard from "./eventCardRenderDom.js"

const wrapper = document.querySelector("#wrapper")



const eventListeners = {
    addCreateEventListener() {
        wrapper.addEventListener("click", (event) => {
            console.log(event.target.id)
            if(event.target.id === "createEvent") {
            renderEventForm()
            } 
            const hiddenInput = document.querySelector("#eventHiddenId")
            if(event.target.id === "saveNewEvent"){
                const nameInput = document.querySelector("#eventName")
                const dateInput = document.querySelector("#eventDate")
                const locationInput = document.querySelector("#eventLocation")
                const newEvent = {
                    "name": nameInput.value, 
                    "hiddenId": hiddenInput.value,
                    "userId": parseInt(eventAPI.user),
                    "date": dateInput.value, 
                    "location": locationInput.value,
                }   
                if(event.target.id === "saveNewEvent" && hiddenInput.value === "") {
                    eventAPI.saveEvents(newEvent).then(eventAPI.getEvents).then(renderEventCard) 
                } else if(event.target.id === "saveNewEvent" && hiddenInput.value) {
                    eventAPI.updateFormFieldsFetch(newEvent).then(eventAPI.getEvents).then(renderEventCard)
                }  
            }
            if(event.target.id.startsWith("deleteButton--")) {
                const deleteButtonId = event.target.id.split("--")[1]
                eventAPI.deleteEvents(deleteButtonId).then(eventAPI.getEvents).then(renderEventCard)
            } 
            if(event.target.id.startsWith("editButton--")) {
                const editButtonId = event.target.id.split("--")[1]
                eventAPI.updateFormFields(editButtonId)
                eventAPI.getEvents(editButtonId).then(renderEventCard)

            }
        })
}
}

export default eventListeners
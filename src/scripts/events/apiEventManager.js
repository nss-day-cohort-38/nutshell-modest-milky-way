const eventBaseUrl = "http://localhost:8088/events"
sessionStorage.setItem("activeUser", 2);
const activeUser = sessionStorage.getItem("activeUser");

const eventAPI = {
    "user": activeUser,
    getEvents() {
        return fetch(eventBaseUrl).then(resp => resp.json())
    }, 
    saveEvents(newEvent) {
        return   fetch(`${eventBaseUrl}`, { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
    }, 
    deleteEvents(deleteButtonId) {
        return fetch(`${eventBaseUrl}/${deleteButtonId}`, {
            method: "DELETE"
        });
    }, 
    updateFormFields(editButtonId) {
        const hiddenInterestId = document.querySelector("#eventHiddenId")
        const nameInput = document.querySelector("#eventName")
        const dateInput = document.querySelector("#eventDate")
        const locationInput = document.querySelector("#eventLocation")
        fetch(`${eventBaseUrl}/${editButtonId}`)
            .then(response => response.json())
            .then(events => {    
                hiddenInterestId.value = events.id
                nameInput.value = events.name
                dateInput.value = events.date
                locationInput.value = events.location
            })
    }, 
    updateFormFieldsFetch(events) {
        return fetch(`${eventBaseUrl}/${events.hiddenInterestId}/`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(events)
        })
    }
}
export default eventAPI
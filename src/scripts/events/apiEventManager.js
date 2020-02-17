const eventBaseUrl = "http://localhost:8088/events"
const eventAPI = {
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
    }
}
export default eventAPI
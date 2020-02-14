const eventBaseUrl = "http://localhost:8088/events"
const eventAPI = {
    getEvents() {
        return fetch(eventBaseUrl).then(resp => resp.json())
    }
}
export default eventAPI
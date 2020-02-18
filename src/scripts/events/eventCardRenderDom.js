import makeComponents from "./eventCardHtmlFactory.js"

const eventCardContainer = document.getElementById("eventCardContainer")

const renderEventCard = (events) => {  
    eventCardContainer.innerHTML = ""
    const sortedEvents = events.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
     })
    sortedEvents.forEach(event => {
        let today = new Date();
        let eventDate = new Date(event.date)
        if(eventDate - today > 0) {
            eventCardContainer.innerHTML += makeComponents.makeEventCardComponent(event)
        } else {
            window.alert("Past date refused, try again!")
        }
        

    })
}

export default renderEventCard
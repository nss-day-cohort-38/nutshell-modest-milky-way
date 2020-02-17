import makeComponents from "./eventCardHtmlFactory.js"

const eventCardContainer = document.getElementById("eventCardContainer")

const renderEventCard = (events) => {  
    eventCardContainer.innerHTML = ""
    events.forEach(event => {
        eventCardContainer.innerHTML += makeComponents.makeEventCardComponent(event)
    })
}

export default renderEventCard
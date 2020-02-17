import makeComponents from "./eventCardHtmlFactory.js"

const eventCardContainer = document.getElementById("eventCardContainer")

const renderEventCard = (events) => {
    events.forEach(event => {
        eventCardContainer.innerHTML = ""
        eventCardContainer.innerHTML += makeComponents.makeEventCardComponent(event)
    })
}

export default renderEventCard
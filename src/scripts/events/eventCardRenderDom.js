import makeComponents from "./eventCardHtmlFactory.js"

const eventCardContainer = document.getElementById("eventCardContainer")

const renderEventCard = (event) => {
    eventCardContainer.innerHTML += makeComponents.makeEventCardComponent(event)
}

export default renderEventCard
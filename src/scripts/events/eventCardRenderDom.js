import makeComponents from "./eventCardHtmlFactory.js"

const eventCardContainer = document.getElementById("eventCardContainer")


const renderEventCard = (events) => {  
    eventCardContainer.innerHTML = ""
    const sortedEvents = events.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
     }).filter((event) => {
        let today = new Date();
        let eventDate = new Date(event.date);
        eventDate.setDate(eventDate.getDate() + 1)
         if(eventDate - today >= 0) {
             return event
         }
     })
 
    sortedEvents.forEach(event => { 
            eventCardContainer.innerHTML += makeComponents.makeEventCardComponent(event)
    })
} 

export default renderEventCard
//FILTER NOTES
// .filter returns true or false , if the date is in the past it will not be in the sorted events
/* let today = new Date();
        let eventDate = new Date(event.date);
         if(eventDate - today > 0) {
             return event
         } */

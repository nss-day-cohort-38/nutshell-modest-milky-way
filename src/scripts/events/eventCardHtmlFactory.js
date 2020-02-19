const makeComponents = {
    makeEventCardComponent(event){
    // Create your own HTML structure for a journal entry
    return `
    <section class="eventInfo">
        <h1>${event.date}</h1>
        <h4>${event.name}</h4>
        <h4>${event.location}</h4>
        <button id="deleteButton--${event.id}">Delete</button>
        <button id="editButton--${event.id}">Edit</button>
    </section>
    `
}
}
export default makeComponents
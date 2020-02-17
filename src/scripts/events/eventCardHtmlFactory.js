const makeComponents = {
    makeEventCardComponent(event){
    // Create your own HTML structure for a journal entry
    return `
    <section>
        <h1>${event.name}</h1>
        <h2>${event.date}</h2>
        <h3>${event.location}</h3>
        <button id="deleteButton--${event.id}">Delete</button>
        <button id="editButton--${event.id}">Edit</button>
    </section>
    `
}
}
export default makeComponents
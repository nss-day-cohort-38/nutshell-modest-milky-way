const formHtmlFactory = () => {
    return  `
    <form class= "eventForm" action="">
        <input type="hidden" id="eventHiddenId" value="">
        <fieldset>
            <label for="eventName">Name:</label>
            <input type="text" name="eventName" id="eventName">
        </fieldset>
        <fieldset>
            <label for="eventDate">Date:</label>
            <input type="date" name="eventDate" id="eventDate">
        </fieldset>
        <fieldset>
            <label for="eventLocation">Location:</label>
            <input type="text" name="eventLocation" id="eventLocation">
        </fieldset>
        <fieldset class="buttonField">
            <button type="button" id="saveNewEvent">Save</button>
        </fieldset>
    `
}

export default formHtmlFactory
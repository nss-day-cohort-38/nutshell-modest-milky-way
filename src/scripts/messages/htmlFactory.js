

const messagesHtmlFactory = (message) => {
    return `
    <section class="messageBox">
    <h3> ${message.user.username}: ${message.message}</h3>
    <p>${message.date}
    <p><button id="editMessage--${message.id}">Edit</button></p>
    </section>
    `
}




export default messagesHtmlFactory
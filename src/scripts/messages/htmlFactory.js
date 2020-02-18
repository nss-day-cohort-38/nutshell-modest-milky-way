

const messagesHtmlFactory = (message) => {
    return `
    <section>
    <h3> ${message.user.username}: ${message.message}</h3>
    <p>${message.date}
    </section>
    <button id="editMessage--${message.id}">Edit</button>
    `
}




export default messagesHtmlFactory
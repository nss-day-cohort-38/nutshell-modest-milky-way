

const htmlFactory = (message) => {
    return `
    <section>
    <h3> ${message.user.username}: ${message.message}</h3>
    </section>
    <button id="editMessage--${message.id}">Edit</button>
    <button class="deleteBtn" id="deleteMessage--${message.id}">Delete</button>
    `
}




export default htmlFactory
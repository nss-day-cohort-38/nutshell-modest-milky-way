

const htmlFactory =(message) => {
    return `
    <section>
    <h3> ${message.user.username}: ${message.message}</h3>
    </section>
    `
}

{/* <button class="deleteBtn" id="deletemessage--${message.id}">Delete</button>
<button id="editMessage--${message.id}"> Edit </button> */}


export default htmlFactory
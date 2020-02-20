import messagesAPI from "./api.js"
import messagesHtmlFactory from "./htmlFactory.js"

const messagesContainer = document.getElementById("messagesContainer");


const renderMessages = {

    renderAllMessages() {

        messagesAPI.getAllMessages()
            .then(messagesContainer.innerHTML = "")
            .then(messages => messages.forEach(message => {
                messagesContainer.innerHTML += messagesHtmlFactory(message)
            }))
    }
}

export default renderMessages
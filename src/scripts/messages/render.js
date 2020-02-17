import API from "./api.js"
import htmlFactory from "./htmlFactory.js"

const messagesContainer = document.getElementById("messagesContainer");


const render = {

    renderAllMessages() {

        API.getAllMessages()
            .then(messagesContainer.innerHTML = "")
            .then(messages => messages.forEach(message => {
                messagesContainer.innerHTML += htmlFactory(message)
            }))
    }
}

export default render
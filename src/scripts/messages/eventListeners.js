import messagesAPI from "./api.js"
import renderMessages from "./render.js";

const hiddenMessageId = document.getElementById("hiddenMessageId");
const messagesContainer = document.getElementById("messagesContainer");
const saveButton = document.getElementById("saveButton");
const newMessageInput = document.getElementById("newMessageInput");





const clearForm = () => {

    hiddenMessageId.value = "";
    newMessageInput.value = "";
}


const updateMessageFields = messageId => {

    fetch(`http://localhost:8088/messages/${messageId}`)
        .then(response => response.json())
        .then(message => {
            const user = sessionStorage.getItem("activeUser");
            const activeUser = parseInt(user);
          
            if (activeUser === message.userId) {
            hiddenMessageId.value = message.id;
            newMessageInput.value = message.message;
            }
            else {
                window.alert('this is not your message to edit ')
            }
        });
}


const messagesEvents = {
    addSaveButtonListener() {
        saveButton.addEventListener("click", (event) => {
            const user = sessionStorage.getItem("activeUser");
            const activeUser = parseInt(user);
            let date = new Date();
            let newDate = date.toLocaleString();
            const newMessage = {
                "userId": activeUser,
                "message": newMessageInput.value,
                "date": newDate
            }


            if (hiddenMessageId.value !== "" && activeUser === newMessage.userId) {
                newMessage.id = parseInt(hiddenMessageId.value);
              

                messagesAPI.updateMessage(newMessage)
                    .then(renderMessages.renderAllMessages)
                    .then(clearForm)
                  
            }

            else if (newMessageInput.value !== "" && activeUser === newMessage.userId) {
                messagesAPI.addNewMessage(newMessage)
                    .then(renderMessages.renderAllMessages)
                    .then(clearForm);
           


            }
            else {
                window.alert("please enter a new message or log in to continue")
            }
        })
    },
    addEditButtonListeners() {
        messagesContainer.addEventListener("click", (event) => {

            if (event.target.id.startsWith("editMessage--")) {

                const messageToEdit = event.target.id.split("--")[1];

                updateMessageFields(messageToEdit)
            }

        })

    }
}




export default messagesEvents

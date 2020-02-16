import API from "./api.js"
import render from "./render.js";

const hiddenMessageId = document.getElementById("hiddenMessageId");
const messagesContainer = document.getElementById("messagesContainer");
const saveButton = document.getElementById("saveButton");
const newMessageInput = document.getElementById("newMessageInput");


const clearForm = () => {
  
    hiddenMessageId.value = "";
    newMessageInput.value = "";
  }


const updateMessageFields = messageId => {

    fetch(`http://localhost:5000/messages/${messageId}`)
        .then(response => response.json())
        .then(message => {
            hiddenMessageId.value = message.id;
            newMessageInput.value = message.message;

        });
}


const events = {
    addSaveButtonListener() {
        saveButton.addEventListener("click", (event) => {
            // console.log(event);
            const newMessage = {
                "userId": API.user,
                "message": newMessageInput.value
            }

            if (hiddenMessageId.value !== "" && API.user === newMessage.userId) {
                newMessage.id = parseInt(hiddenMessageId.value);
            // console.log(newMessage);

            API.updateMessage(newMessage)
                .then(render.renderAllMessages)
                .then(clearForm)
            }

            else if (newMessageInput.value !== "" && API.user === newMessage.userId) {
                API.addNewMessage(newMessage)
                    .then(render.renderAllMessages)
                    .then(clearForm);


            }
            else {
                window.alert("please enter a new message or log in to continue")
            }
        })
    },
    addDeleteAndEditButtonListeners() {
        messagesContainer.addEventListener("click", (event) => {

                 
              if (event.target.id.startsWith("deleteMessage--")) {
                const deleteBtnId = event.target.id.split("--")[1];

                messagesContainer.textContent = ""
                if (confirm("Are you sure you want to delete?") === true) {
                API.deleteMessage(deleteBtnId)
                    .then(render.renderAllMessages)
                }
                else {
                    render.renderAllMessages();
                }
            }
            else if (event.target.id.startsWith("editMessage--")) {

                const messageToEdit = event.target.id.split("--")[1];

                updateMessageFields(messageToEdit)
            }

        })

        }
    }

    
    
 
export default events

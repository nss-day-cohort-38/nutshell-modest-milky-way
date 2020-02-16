import API from "./api.js"
import render from "./render.js";

const messagesContainerId = document.getElementById("messagesContainerId");
const messagesContainer = document.getElementById("messagesContainer");
const saveButton = document.getElementById("saveButton");
const newMessageInput = document.getElementById("newMessageInput");

console.log(API.user)
const events = {
    addSaveButtonListener() {
        saveButton.addEventListener("click", (event) => {
            console.log(event);
            const newMessage = {
                "userId": API.user,
                "message": newMessageInput.value
            }
            console.log(newMessageInput.value);

            if (newMessageInput.value !== "" && API.user !== "") {
                API.addNewMessage(newMessage)
                    .then(render.renderAllMessages)

            }
            else {
                window.alert("please enter a new message or log in to continue")
            }
        })
    }
}

export default events

import API from "./api.js"
import render from "./render.js";

const messagesContainerId = document.getElementById("messagesContainerId");
const messagesContainer = document.getElementById("messagesContainer");


const events = {
    addSaveButtonListener() {
        saveButton.addEventListener("click", (event) => {
            console.log(event);

if (messagesContainerId.value !== "" && API.user !== "") {


messagesContainer.textContent = ""

API.addNewMessage(newMessage)
   .then(render.renderAllmessages)

}
else {
window.alert("please enter a new message or log in to continue")
}
        })
    }
}

export default events

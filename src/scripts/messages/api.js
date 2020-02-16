
const baseUrl = "http://localhost:5000";
sessionStorage.setItem("activeUser", 3);
const user = sessionStorage.getItem("activeUser");
const activeUser = parseInt(user);

console.log(activeUser);


// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

const API = {
    
    user: activeUser,

    getAllMessages(){
        return fetch(`${baseUrl}/messages?_expand=user`)
        .then(response => response.json());
    },

    addNewMessage(newMessage){
        return fetch(`${baseUrl}/messages?_expand=user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(response => response.json())

    },
}



export default API
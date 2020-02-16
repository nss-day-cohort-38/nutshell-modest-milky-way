
const baseUrl = "http://localhost:5000";
sessionStorage.setItem("activeUser", 2);
const user = sessionStorage.getItem("activeUser");
// console.log(user);


// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

const API = {
    
    user: user,

    getAllMessages(){
        return fetch(`${baseUrl}/messages?_expand=user`)
        .then(response => response.json());
    },


}



export default API
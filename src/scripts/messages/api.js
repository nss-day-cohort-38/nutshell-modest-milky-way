
const baseUrl = "http://localhost:8088";
sessionStorage.setItem("activeUser", 3);
const user = sessionStorage.getItem("activeUser");
const activeUser = parseInt(user);


const API = {

    user: activeUser,

    getAllMessages() {
        return fetch(`${baseUrl}/messages?_expand=user`)
            .then(response => response.json());
    },

    addNewMessage(newMessage) {
        return fetch(`${baseUrl}/messages?_expand=user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(response => response.json())

    },
    updateMessage(message) {
        return fetch(`${baseUrl}/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });
    },

    deleteMessage(id) {
        return fetch(`${baseUrl}/messages/${id}`, {
            method: "DELETE"
        })
    }
}




export default API
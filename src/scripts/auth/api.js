const baseUrl = "http://localhost:8088";


const usersAPI = {

    getAllUsers() {
        return fetch(`${baseUrl}/users`)
            .then(response => response.json());
    },

    addNewUser(newUser) {
        return fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(response => response.json())

    }
}

export default usersAPI
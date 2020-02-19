const friendsApiManager = {
    baseUrl: 'http://localhost:8088/friendships',
    expand: '_expand=user',
    getFriendList () {
        return fetch(`${this.baseUrl}?${this.expand}`)
        .then(response => response.json())
    },
    getFriendship () {
        return fetch(`${this.baseUrl}/${id}?${this.expand}`)
            .then(response => response.json())
    },
    saveFriendship (friendship) {
        // Note: There is no edit functionality for friendships
        return fetch(`${this.baseUrl}/${friendship.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(friendship)
        })
    },
    makeFriendshipObject () {
        // TODO: make this
    },
    deleteFriendship (id) {
        return fetch(`${this.baseUrl}/${id}`, {method: "DELETE"})
            .then(response => response.json())
    }
}

export default articlesApiManager;
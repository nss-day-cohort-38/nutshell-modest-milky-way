const apiManager = {
    baseUrl: 'http://localhost:8088',
    expandUserId: '_expand=user',
    getArticles () {
        return fetch(`${this.baseUrl}/news?${this.expandUserId}`)
            .then(response => response.json())
    }
    // TODO: get
    // TODO: edit
    // TODO: save
    // TODO: delete
}



export default apiManager
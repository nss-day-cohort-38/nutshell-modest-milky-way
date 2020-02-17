const articlesApiManager = {
    baseUrl: 'http://localhost:8088',
    expandUserId: '_expand=user',
    getArticles () {
        return fetch(`${this.baseUrl}/news?${this.expandUserId}`)
            .then(response => response.json())
    }
    // TODO: edit
    // TODO: save
    // TODO: delete
    //TODO: makeObject
}



export default articlesApiManager
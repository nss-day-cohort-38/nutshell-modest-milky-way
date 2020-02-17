const articlesApiManager = {
    baseUrl: 'http://localhost:8088/news',
    expandUserId: '_expand=user',
    getArticles () {
        return fetch(`${this.baseUrl}?${this.expandUserId}`)
            .then(response => response.json())
    },
    // TODO: edit
    saveArticle (article) {
        // If there is an id, the user is editing an existing entry
        if (article.id) {
            return fetch(`${this.baseUrl}/${article.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(article)
            })
        // If there is no id, the user is saving a new entry
        } else {
            return fetch(`${this.baseUrl}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(article)
            })
        }
    },
    makeArticleObject () {
        let id = document.getElementById("article-id").value;
        let timestamp = new Date();
        // TODO; get user id
        let userId = 4;
        let title = document.getElementById("articleTitle").value;
        let synopsis = document.getElementById("articleSynopsis").value;
        let url = document.getElementById("articleUrl").value;
        
        return {
            "id": id,
            "timestamp": timestamp,
            "userId": userId,
            "title": title,
            "synopsis": synopsis,
            "url": url
        }
        
    },
    deleteArticle (id) {
        return fetch(`${this.baseUrl}/${id}`, {method: "DELETE"})
        .then(response => response.json())
    }
    // TODO: delete
}

export default articlesApiManager;
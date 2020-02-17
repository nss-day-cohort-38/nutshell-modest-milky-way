const htmlFactory = {
    form: {
        //TODO: makeHtml
    },
    article: {
        makeHtml(article){
            return `
            <article>
                <h2>${article.title}</h2>
                <div>
                    <p><strong>Date Posted:</strong> ${article.timestamp}</p>
                    <p><strong>Posted by:</strong> ${article.user.username}</p>
                    <p><strong>URL:</strong> ${article.url}</p>
                    <p><strong>Synopsis:</strong> ${article.synopsis}</p>
                </div>
            </article>
            `
        }
        //TODO: makeObject
    }
}

export default htmlFactory;
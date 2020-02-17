const articlesHtmlFactory = {
    form: {
        makeHtml(){
            return `
            <article id="article__form">
                <input type="hidden" id="article-id" value="">
                <input type="hidden" id="articleDate" value="">
                <input type="hidden" id="userId" value="">
                <h2>Add New Article</h2>
                <form action="">
                    <div class="column-forms">
                        <fieldset>
                            <label for="articleTitle">Article Title</label>
                            <input type="text" name="articleTitle" id="articleTitle" placeholder="Enter article title here...">
                        </fieldset>
                        <fieldset>
                            <label for="articleSynopsis">Synopsis</label>
                            <textarea name="articleSynopsis" id="articleSynopsis" placeholder="Enter article synopsis here..."></textarea>
                        </fieldset>
                        <fieldset>
                            <label for="articleUrl">URL</label>
                            <input type="text" name="articleUrl" id="articleUrl" placeholder="Enter URL here...">
                        </fieldset>
                    </div>
                </form>
                <div class="buttons">       
                    <button id="article-save-button">Save</button>
                    <button id="article-reset-button">Reset</button>
                </div>
            </article>
            `
        }
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

    }
}

export default articlesHtmlFactory;
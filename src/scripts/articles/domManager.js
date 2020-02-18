import articlesHtmlFactory from './htmlFactory.js'
import articlesApiManager from './apiManager.js'

const articlesDomManager = {
    form: {
        renderForm() {
            const container = document.querySelector("#article-form__div");
            let html = articlesHtmlFactory.form.makeHtml();
            container.innerHTML = html
        },
        clearForm() {
            document.getElementById("article-id").value = ""
            // TODO; get user id
            document.getElementById("articleTitle").value = "";
            document.getElementById("articleSynopsis").value = "";
            document.getElementById("articleUrl").value = "";
        }
    },
    article: {
        renderArticleList (articles) {
            // Sort to get the articles in descending order
            // based on timestamp
            const sortedArticles = articles.sort((a, b) => {
                return new Date(b.timestamp) - new Date(a.timestamp)
              })
            const container = document.querySelector("#articles__div");
            container.innerHTML = "";
            sortedArticles.forEach(article => {
                let html = articlesHtmlFactory.article.makeHtml(article);
                container.innerHTML += html;
            });
        },
        refreshArticles () {
            articlesApiManager.getArticles()
                .then(this.renderArticleList);
        }
    },
    
}

export default articlesDomManager
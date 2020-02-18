import articlesHtmlFactory from './htmlFactory.js'
import articlesApiManager from './apiManager.js'

const articlesDomManager = {
    form: {
        renderNewForm() {
            const container = document.querySelector("#article-form__div");
            let html = articlesHtmlFactory.form.makeHtml();
            container.innerHTML = html
        },
        renderEditForm(articleId) {
            const container = document.querySelector(`#article-container__${articleId}`);
            let html = articlesHtmlFactory.form.makeHtml();
            container.innerHTML = html
        },
        clearForm() {
            document.getElementById("article-id").value = "";
            document.getElementById("userId").value = "";
            document.getElementById("articleTitle").value = "";
            document.getElementById("articleSynopsis").value = "";
            document.getElementById("articleUrl").value = "";
        },
        destroyForm() {
            const container = document.querySelector("#article__form");
            //A workaround for times when the form is already gone...
            if (container) {
                container.remove();
            }
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
            })
        },
        refreshArticles () {
            return articlesApiManager.getArticles()
                .then(articlesDomManager.article.renderArticleList)
        }
    },
    
}

export default articlesDomManager
import htmlFactory from './htmlFactory.js'
import apiManager from './apiManager.js'
import articlesEventListeners from './eventListeners.js'

const domMananger = {
    form: {
        renderForm() {
            const container = document.querySelector("#article-form__div");
            let html = htmlFactory.form.makeHtml();
            container.innerHTML = html
        }

        //TODO: clearform
    },
    article: {
        renderArticleList (articles) {
            const container = document.querySelector("#articles__div");
            container.innerHTML = "";
            articles.forEach(article => {
                let html = htmlFactory.article.makeHtml(article);
                container.innerHTML += html;
            });
        },
        refreshArticles () {
            apiManager.getArticles()
                .then(this.renderArticleList)
                .then(articlesEventListeners.addArticlesEventListener) 
        }
    },
    
}

export default domMananger
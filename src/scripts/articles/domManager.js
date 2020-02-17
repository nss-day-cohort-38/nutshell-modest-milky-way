import articlesHtmlFactory from './htmlFactory.js'
import articlesApiManager from './apiManager.js'
import articlesEventListeners from './eventListeners.js'

const articlesDomManager = {
    form: {
        renderForm() {
            const container = document.querySelector("#article-form__div");
            let html = articlesHtmlFactory.form.makeHtml();
            container.innerHTML = html
        }

        //TODO: clearform
    },
    article: {
        renderArticleList (articles) {
            const container = document.querySelector("#articles__div");
            container.innerHTML = "";
            articles.forEach(article => {
                let html = articlesHtmlFactory.article.makeHtml(article);
                container.innerHTML += html;
            });
        },
        refreshArticles () {
            articlesApiManager.getArticles()
                .then(this.renderArticleList)
                .then(articlesEventListeners.addArticlesEventListener) 
        }
    },
    
}

export default articlesDomManager
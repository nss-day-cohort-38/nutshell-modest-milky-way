import htmlFactory from './htmlFactory.js'
import apiManager from './apiManager.js'

const domMananger = {
    form: {
        //TODO: renderForm
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
        //TODO: refreshArticleList
        refreshArticles () {
            apiManager.getArticles()
                .then(this.renderArticleList) 
        }
        //TODO: renderArticleList
    },
    
}

export default domMananger
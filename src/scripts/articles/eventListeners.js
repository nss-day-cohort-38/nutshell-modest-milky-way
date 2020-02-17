import articlesApiManager from "./apiManager.js";
import articlesDomManager from "./domManager.js"

const articlesEventListeners = {
    addArticlesEventListener() {
        const wrapper = document.getElementById("wrapper");

        wrapper.addEventListener("click", (e) => {
            // IF A BUTTON
            if (e.target.id.split("__")[1] === "button") {
                const btnType = e.target.id.split("__")[0];
                // SAVE AN ARTICLE
                if (btnType === "article-save") {
                    const article = articlesApiManager.makeArticleObject();
                    articlesApiManager.saveArticle(article)
                        .then(articlesDomManager.article.refreshArticles())
                        .then(articlesDomManager.form.clearForm)
                }
                // RESET FORM
                if (btnType === "article-reset") {
                    articlesDomManager.form.clearForm();
                }
                // TODO: Add Cancel
                // TODO: Add Edit
                if (btnType === "article-delete") {
                    const btnId = e.target.id.split("__")[2];
                    articlesApiManager.deleteArticle(btnId)
                        .then(articlesDomManager.article.refreshArticles());
                }
            }
        })
    }

}

export default articlesEventListeners;

import articlesApiManager from "./apiManager.js";
import articlesDomManager from "./domManager.js"

const articlesEventListeners = {
    // TODO: Add New
    // TODO: Add Save
    addArticlesEventListener() {
        const wrapper = document.getElementById("wrapper");

        wrapper.addEventListener("click", (e) => {
            if (e.target.id.split("__")[1] === "button") {
                const btn = e.target.id.split("__")[0];
                if (btn === "article-save") {
                    const article = articlesApiManager.makeArticleObject();
                    articlesApiManager.saveArticle(article)
                        .then(articlesDomManager.article.refreshArticles())
                }
                if (btn === "article-reset") {
                    // TODO: FINISH THIS
                    console.log("resetting article")
                }
            }
        })
    }
    // TODO: Add Cancel
    // TODO: Add Edit
    // TODO: Add Delete
}

export default articlesEventListeners;

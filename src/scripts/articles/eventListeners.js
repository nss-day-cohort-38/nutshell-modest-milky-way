import articlesApiManager from "./apiManager.js";
import articlesDomManager from "./domManager.js"
import articleFormValidation from "./validation.js"

const articlesEventListeners = {
    addArticlesEventListener() {
        const wrapper = document.getElementById("wrapper");

        wrapper.addEventListener("click", (e) => {
            // IF A BUTTON
            if (e.target.id.split("__")[1] === "button") {
                const btnType = e.target.id.split("__")[0];
                // NEW ARTICLE BUTTON
                if (btnType === "article-new") {
                    articlesDomManager.form.renderNewForm();
                }
                // CANCEL NEW ARTICLE
                else if (btnType === "article-cancel") {
                    articlesDomManager.form.destroyForm();
                    articlesDomManager.article.refreshArticles();

                }
                // SAVE AN ARTICLE
                else if (btnType === "article-save") {
                    const article = articlesApiManager.makeArticleObject();
                    if (articleFormValidation.saveArticle(article)) {
                        articlesApiManager.saveArticle(article)
                            .then(articlesDomManager.article.refreshArticles())
                            .then(articlesDomManager.form.destroyForm())
                    } else {
                        alert("Please fill out all required fields");
                    }
                }
                // RESET FORM
                else if (btnType === "article-reset") {
                    articlesDomManager.form.clearForm();
                }
                // EDIT ARTICLE
                else if (btnType === "article-edit") {
                    const btnId = e.target.id.split("__")[2];
                    // If the save article form is already open,
                    // Prompt the user whether they want to continue
                    if (document.getElementById("article-id")) {
                        const response = confirm("Abandon current edits?")
                        if (response) {
                            articlesDomManager.form.destroyForm();
                            articlesDomManager.article.refreshArticles();
                            /* 
                            FIXME: For some reason, this next specific render doesn't work properly. 
                            (likely, it is happening before the articles are refreshed, but I wasn't
                            able to get a .then statement to work properly.)
                            Right now, they just have to click the edit button again... 
                            */
                            articlesDomManager.form.renderEditForm(btnId)
                            articlesApiManager.getArticle(btnId)
                                .then(articlesApiManager.editArticle)
                        }
                    } else {
                        articlesDomManager.form.renderEditForm(btnId);
                        articlesApiManager.getArticle(btnId)
                            .then(articlesApiManager.editArticle)
                    }
                }
                // DELETE ARTICLE
                else if (btnType === "article-delete") {
                    const btnId = e.target.id.split("__")[2];
                    const response = confirm("Are you sure you want to delete this entry?")
                    if (response) {
                        articlesApiManager.deleteArticle(btnId)
                            // FIXME: This doesn't consistently refresh either...
                            .then(articlesDomManager.article.refreshArticles());
                    }
                }
            }
        })
    }

}

export default articlesEventListeners;

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
                    articlesDomManager.form.renderForm();
                }
                // CANCEL NEW ARTICLE
                else if (btnType === "article-cancel") {
                    articlesDomManager.form.destroyForm();
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
                            document.getElementById("article-form__div").innerHTML = "";
                            articlesDomManager.form.renderForm();
                            articlesApiManager.getArticle(btnId)
                                .then(articlesApiManager.editArticle)
                                .then(articlesDomManager.article.refreshArticles());
                        }
                    } else {
                        articlesDomManager.form.renderForm();
                        articlesApiManager.getArticle(btnId)
                            .then(articlesApiManager.editArticle)
                            .then(articlesDomManager.article.refreshArticles());
                    }
                }
                // DELETE ARTICLE
                else if (btnType === "article-delete") {
                    const btnId = e.target.id.split("__")[2];
                    const response = confirm("Are you sure you want to delete this entry?")
                    if (response) {
                        articlesApiManager.deleteArticle(btnId)
                            .then(articlesDomManager.article.refreshArticles());
                    }
                }
            }
        })
    }

}

export default articlesEventListeners;

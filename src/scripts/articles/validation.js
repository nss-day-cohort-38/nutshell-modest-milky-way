
const articleFormValidation = {
    saveArticle(article) {
        if (article.title && article.synopsis && article.url) {
            return true;
        } else {return false;}
    }
}

export default articleFormValidation;
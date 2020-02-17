import htmlMaster from './htmlMaster.js'
import domManager from './articles/domManager.js'
import domMananger from './articles/domManager.js';
//FIXME: this naming convention will likely cause issues...

htmlMaster.renderer.navBar();
htmlMaster.renderer.footer();

domManager.article.refreshArticles();
domMananger.form.renderForm();
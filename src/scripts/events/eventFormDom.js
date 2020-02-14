import formHtmlFactory from "./eventFormHtmlFactory.js"

const formContainer = document.querySelector("#eventFormContainer")

const renderEventForm = () => {
        formContainer.innerHTML = ""
        formContainer.innerHTML += formHtmlFactory()
}

export default renderEventForm 
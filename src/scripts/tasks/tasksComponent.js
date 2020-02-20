const makeTasksComponent = (submission) => {
    console.log(submission);
    return `
             <div class="entryLog">
                 <h1> ${submission.taskName} </h1>
                 <section> ${submission.expectedCompletion} </section>
                 <aside>${submission.isComplete}</aside>
                 <button id="isCompleted--${submission.id}">
                 ${submission.isComplete}
             </button>
             <button id="editTask--${submission.id}">
             Edit Task
            </button>
             <button id="deleteTask--${submission.id}" class="deleteBtn">
                 Delete Task
             </button>
             </div>
             
         `
}

export default makeTasksComponent
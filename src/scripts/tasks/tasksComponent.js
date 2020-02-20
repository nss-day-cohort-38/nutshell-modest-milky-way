const makeTasksComponent = (submission) => {
    console.log(submission);
    return `
             <div class="entryLog">
                 <h1> ${submission.taskName} </h1>
                 <section> Expected completion date: ${submission.expectedCompletion} </section>
                 <aside> Task has been completed: ${submission.isComplete}
                 </aside>
                 <br>
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
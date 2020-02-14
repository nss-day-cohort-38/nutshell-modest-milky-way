const makeTasksComponent = (submission) => {
    console.log(submission);
       return `
             <div class="entryLog">
                 <h1> ${submission.taskName} </h1>
                 <section> ${submission.expectedCompletion} </section>
                 <aside>${submission.isComplete}</aside>
             </div>
         `
   }
   
   export default makeDataEntryComponent
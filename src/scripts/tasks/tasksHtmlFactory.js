const createTaskCard = task => `
    <section class="recipe--${task.id}">
        <header class="task_name">
            ${task.name}
        </header>
        <div class="task_completion">
            ${task.expectedCompletion}
        </div>
        <button id="isCompleted--${task.id}">
            ${task.isCompleted}
        </button>
    </section>
  `;

export default createTaskCard
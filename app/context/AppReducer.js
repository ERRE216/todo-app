export default function reducer(state, action) {
  switch (action.type) {
    case "CREATE-CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case "ADD-TASK":
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === action.payload.category) {
            category.categoryTasks.push(action.payload);
            return category;
          }
          return category;
        }),
      };

    case "DELETE-TASK":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? category.categoryTasks.filter((task) => {
                task.id !== action.payload.taskID;
              })
            : category,
        ),
      };
    case "TOGGLE-TASK-DONE":
      return {
        ...state,
        //Loops trough categories
        categories: state.categories.map((category) => {
          //Finds the category that matches the categoryId passed as payload
          if (category.name === action.payload.categoryId) {
            //If true loops trough the tasks and toggle the done property of the one
            //that matches the taskId passed as , if false return the task without update it
            category.categoryTasks.map((task) => {
              task.id === action.payload.taskId
                ? (task.done = !task.done)
                : task;
            });
          }
          return category;
        }),
      };
    case "START-DONE":
      return {
        ...state,
        meta: { ...state.meta, haveStarted: true },
      };
    default:
      return state;
  }
}

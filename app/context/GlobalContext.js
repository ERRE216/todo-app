import React, { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";
import { Task, Category } from "./ConstructorClasses";

const initialState = {
  userInfo: { userName: "$Name", userLastName: "$LastName" },
  categories: [],
  meta: { lastUpdated: "", databaseVersion: "1", haveStarted: false },
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function createCategory(name, color) {
    const createdCategory = new Category(name, color);
    try {
      dispatch({ type: "CREATE-CATEGORY", payload: createdCategory });
    } catch (error) {
      console.log(error);
    }
  }

  async function addTask(name, deadline, category) {
    const createdTask = new Task(name, deadline, category);
    try {
      dispatch({ type: "ADD-TASK", payload: createdTask });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(taskId, categoryId) {
    try {
      dispatch({ type: "DELETE-TASK", payload: { taskId, categoryId } });
    } catch (error) {
      console.log(error);
    }
  }

  function toggleTaskDone(taskId, categoryId) {
    try {
      // console.log("Sent to toggle", taskId, categoryId);
      dispatch({ type: "TOGGLE-TASK-DONE", payload: { taskId, categoryId } });
    } catch (error) {
      console.log(error);
    }
  }

  function getAllTasks() {
    const { categories } = state;
    const tasksFromCategories = categories.map((category) => {
      if (category.tasksAmount() > 0) {
        return category.categoryTasks;
      }
    });

    const sanitizedTasks = tasksFromCategories.filter((task) => task != null);

    let taskList = !sanitizedTasks ? sanitizedTasks : [];

    if (sanitizedTasks !== null) {
      sanitizedTasks.forEach((taskGroup) => {
        taskGroup.forEach((task) => {
          taskList.push(task);
        });
      });
    }
    return taskList;
  }

  function getCategoryColor(categoryId) {
    const categoryColor = state.categories.filter((category) => {
      if (category.name === categoryId) {
        return category;
      }
    });

    return categoryColor[0].color;
  }

  function PopulateState() {
    const starter = [
      { name: "Bussines", color: "pink" },
      { name: "Personal", color: "pink" },
      { name: "Other", color: "pink" },
    ];

    starter.forEach((E) => {
      createCategory(E.name, E.color);
    });

    dispatch({ type: "START-DONE" });
  }

  useEffect(() => {
    if (!state.meta.haveStarted) {
      PopulateState();
    }
  }, []);

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        state,
        createCategory,
        addTask,
        getAllTasks,
        getCategoryColor,
        toggleTaskDone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

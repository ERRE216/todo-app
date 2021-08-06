import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

class Task {
  constructor(name, deadline, category) {
    this.id = uuidv4();
    this.name = name;
    this.added = new Date(Date.now());
    this.done = false;
    this.deadline = new Date(deadline);
    this.category = category;
  }
}

class Category {
  //Contructor Properties
  constructor(name, color) {
    this.id = uuidv4();
    this.name = name;
    this.categoryTasks = [];
    this.color = color;
  }

  //Calculates the Completed Tasks Percentage of The Category
  completedPercent = function () {
    let amountOfTasks = this.tasksAmount();
    let completedTasks = 0;
    let completedPercentage = 0;

    if (this.categoryTasks.length > 0) {
      this.categoryTasks.forEach((task) => {
        if (task.done === true) {
          completedTasks += 1;
        }
      });
    }

    if (amountOfTasks > 0) {
      completedPercentage = (completedTasks / amountOfTasks) * 100;
    }

    console.log(completedPercentage);
    return parseInt(completedPercentage);
  };

  //A shorthand function to get the amount of Tasks in the category
  tasksAmount = function () {
    return this.categoryTasks.length;
  };
}

module.exports = { Task, Category };

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function Task(name, deadline, category) {
  this.id = uuidv4();
  this.name = name;
  this.added = new Date(Date.now());
  this.done = false;
  this.deadline = new Date(deadline);
  this.category = category;
}

function Category(name, color) {
  this.id = uuidv4();
  this.name = name;
  this.categoryTasks = [];
  this.color = color;
  // this.completed = function () {
  //   let completedTasks;
  //   if (this.categoryTasks.length > 0) {
  //     this.categoryTasks.forEach((task) => {
  //       if (task.done === true) {
  //         completedTasks += 1;
  //       }
  //     });
  //   } else {
  //     completedTasks = 0;
  //   }
  //   return completedTasks;
  // };
  this.tasksAmount = function () {
    return this.categoryTasks.length;
  };
  this.addTask = function (task) {
    this.categoryTasks.push(task);
  };
}

Category.prototype.completed = function () {
  let completedTasks;
  if (this.categoryTasks.length > 0) {
    this.categoryTasks.forEach((task) => {
      if (task.done === true) {
        completedTasks += 1;
      }
    });
  } else {
    completedTasks = 0;
  }
  return completedTasks;
};

module.exports = { Task, Category };

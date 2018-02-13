// object to keep track of task state

function newTask(title, description) {

  // inside the newtask
  // obj is created with methods which allow external access of properties in the object 'this'
  const task = {
    title: title,
    description: description,
    complete: false,

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function() {
      this.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean cat litter', 'take all the 💩 out of the litter box');
const task2 = newTask('Do laundry', 'cleeeeean');
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

// console.log(tasks);

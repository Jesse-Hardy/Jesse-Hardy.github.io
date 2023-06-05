import { Component, OnInit } from "@angular/core";
import { Task, TaskService } from "../task.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = "";
  newTaskDescription = "";

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  get tasksDueToday(): number {
    const today = new Date();
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear()
      );
    }).length;
  }

  addTask(event: Event): void {
    event.preventDefault();

    const newTask: Task = {
      id: Date.now(), // creates a unique id based on the current timestamp
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      dueDate: new Date(),
      completed: false
    };

    this.taskService.addTask(newTask);
    this.newTaskTitle = "";
    this.newTaskDescription = "";
    this.tasks = this.taskService.getTasks(); // Update task list
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks(); // Update task list
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks(); // Update task list
  }
}

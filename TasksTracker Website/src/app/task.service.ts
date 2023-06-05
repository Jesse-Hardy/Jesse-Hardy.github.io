import { Injectable } from "@angular/core";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      description: "This is an example task.",
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      completed: false
    }
    // More tasks here...
  ];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

import { Component, OnInit } from "@angular/core";

//* services
import { TaskService } from "./task.service";

//* interface
import { Task } from "./task.interface";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: [],
})
export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => console.log(err),
      complete: () => console.log("Get tasks done!"),
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Delete task done!"),
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Update reminder done!"),
    });
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Add task done!"),
    });
  }
}

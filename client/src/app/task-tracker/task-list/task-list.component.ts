import { Component, OnInit } from "@angular/core";
import { Task } from "../models/task.model";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
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

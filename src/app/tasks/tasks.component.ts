import { TaskService } from "./task.service";
import { Component, OnInit } from "@angular/core";
import { Task } from "./task.interface";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => console.log(err),
      complete: () => console.log("Get tasks done!"),
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Delete task done!"),
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Update reminder done!"),
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
      complete: () => console.log("Add task done!"),
    });
  }
}

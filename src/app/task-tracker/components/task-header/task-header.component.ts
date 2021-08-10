import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TaskUiService } from "app/task-tracker/services/task-ui.service";

@Component({
  selector: "app-task-header",
  templateUrl: "./task-header.component.html",
  styleUrls: ["./task-header.component.css"],
})
export class TaskHeaderComponent implements OnInit {
  title: string = "Task Tracker";
  isShowAddTaskForm!: boolean;

  constructor(private taskUiService: TaskUiService, private router: Router) {}

  ngOnInit(): void {
    this.getIsShowAddTaskForm();
  }

  getIsShowAddTaskForm(): void {
    const observer = {
      next: (data: boolean) => (this.isShowAddTaskForm = data),
      error: (err: any) => console.log(err),
      complete: () => console.log("Done!"),
    };
    this.taskUiService.getIsShowAddTaskForm().subscribe(observer);
  }

  changeIsShowAddTaskForm(): void {
    this.taskUiService.changeIsShowAddTaskForm();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}

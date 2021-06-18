import { Component, OnInit } from "@angular/core";

//* services
import { UiService } from "../ui.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  isShowAddTaskForm!: boolean;

  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {
    this.getIsShowAddTaskForm();
  }

  getIsShowAddTaskForm(): void {
    const observer = {
      next: (data: boolean) => (this.isShowAddTaskForm = data),
      error: (err: any) => console.log(err),
      complete: () => console.log("Done!"),
    };
    this.uiService.getIsShowAddTaskForm().subscribe(observer);
  }

  changeIsShowAddTaskForm(): void {
    this.uiService.changeIsShowAddTaskForm();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}

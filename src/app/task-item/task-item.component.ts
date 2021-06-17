import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Task } from "../tasks/task.interface";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  handleClick(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Task } from "./../../models/task.model";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  handleClick(task: Task): void {
    this.deleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.toggleReminder.emit(task);
  }
}

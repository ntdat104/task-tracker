import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Task } from "#types/task";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"],
})
export class TaskItemComponent implements OnInit {
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

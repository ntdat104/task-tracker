import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Task } from "../tasks/task.interface";

import { UiService } from "../ui.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = false;
  subscription?: Subscription;

  formData = this.formBuilder.group({
    text: ["", Validators.required],
    day: ["", Validators.required],
    reminder: [false],
  });

  constructor(private uiService: UiService, private formBuilder: FormBuilder) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  isFormValid(formData: FormGroup): boolean {
    return formData.valid;
  }

  onSubmit(): void {
    if (this.isFormValid(this.formData)) {
      const newTask: Task = this.formData.value;
      this.onAddTask.emit(newTask);

      this.formData.reset();
      this.showAddTask = !this.showAddTask;
      this.uiService.toggleAddTask();
    } else alert("Form is invalid");
  }
}

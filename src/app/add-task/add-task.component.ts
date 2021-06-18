import { Component, OnInit, Output, EventEmitter } from "@angular/core";

//* form
import { FormBuilder, Validators } from "@angular/forms";

//* ỉnterface
import { Task } from "../tasks/task.interface";

//* services
import { UiService } from "../ui.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: [],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  isShowAddTaskForm!: boolean;

  formData = this.formBuilder.group({
    text: ["", Validators.required],
    day: ["", Validators.required],
    reminder: [false],
  });

  constructor(private uiService: UiService, private formBuilder: FormBuilder) {}

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

  onSubmit(): void {
    if (this.formData.valid) {
      const newTask: Task = this.formData.value;
      this.addTask.emit(newTask);

      this.formData.reset();
      this.getIsShowAddTaskForm();
      this.changeIsShowAddTaskForm();
    } else alert("Form is invalid");
  }
}

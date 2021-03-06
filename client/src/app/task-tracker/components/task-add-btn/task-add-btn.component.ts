import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "./../../models/task.model";
import { TaskUiService } from "./../../services/task-ui.service";

interface InitialProps {
  text: string;
  day: string;
  reminder: boolean;
}

@Component({
  selector: "app-task-add-btn",
  templateUrl: "./task-add-btn.component.html",
  styleUrls: ["./task-add-btn.component.css"],
})
export class TaskAddBtnComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  isShowAddTaskForm!: boolean;
  initialValue!: InitialProps;

  formAdd: FormGroup = this.fb.group({
    text: ["", Validators.required],
    day: ["", Validators.required],
    reminder: [false],
  });

  constructor(private taskUiService: TaskUiService, private fb: FormBuilder) {}

  /**
   * call getIsShowAddTaskForm and set initialValue from form-value
   */
  ngOnInit(): void {
    this.getIsShowAddTaskForm();
    this.initialValue = this.formAdd.value;
  }

  /**
   * Get text
   */
  get text(): any {
    return this.formAdd.controls.text;
  }

  /**
   * Get day
   */
  get day(): any {
    return this.formAdd.controls.day;
  }

  /**
   * Get reminder
   */
  get reminder(): any {
    return this.formAdd.controls.reminder;
  }

  /**
   * Get variable isShowAddTaskForm from task.service
   */
  getIsShowAddTaskForm(): void {
    const observer = {
      next: (data: boolean) => (this.isShowAddTaskForm = data),
      error: (err: any) => console.log(err),
      complete: () => console.log("Done!"),
    };
    this.taskUiService.getIsShowAddTaskForm().subscribe(observer);
  }

  /**
   * change variable isShowAddTaskForm from task.service
   */
  changeIsShowAddTaskForm(): void {
    this.taskUiService.changeIsShowAddTaskForm();
  }

  /**
   * submit form
   */
  onSubmit(): void {
    if (this.formAdd.valid) {
      const newTask: Task = this.formAdd.value;
      this.addTask.emit(newTask);

      /**
       * reset to initialValue(form)
       */
      this.formAdd.reset(this.initialValue);

      /**
       * change variable isShowAddTaskForm from task.service
       */
      this.changeIsShowAddTaskForm();
    }
  }
}

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskUiService {
  private isShowAddTaskForm: boolean = false;

  private subject = new Subject<boolean>();

  constructor() {}

  changeIsShowAddTaskForm(): void {
    this.isShowAddTaskForm = !this.isShowAddTaskForm;
    this.subject.next(this.isShowAddTaskForm);
  }

  getIsShowAddTaskForm(): Observable<boolean> {
    return this.subject.asObservable();
  }
}

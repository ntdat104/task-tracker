import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "configs/index";
import { Observable } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private apiUrl: string = config.API_URL;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const urlDelete = this.apiUrl + `/${task.id}`;
    return this.httpClient.delete<Task>(urlDelete);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const urlUpdate = this.apiUrl + `/${task.id}`;
    return this.httpClient.put<Task>(urlUpdate, task, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, this.httpOptions);
  }
}

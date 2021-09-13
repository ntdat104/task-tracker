import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TaskAboutComponent } from "./components/task-about/task-about.component";
import { TaskAddBtnComponent } from "./components/task-add-btn/task-add-btn.component";
import { TaskFooterComponent } from "./components/task-footer/task-footer.component";
import { TaskHeaderComponent } from "./components/task-header/task-header.component";
import { TaskComponent } from "./components/task/task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskTrackerRoutingModule } from "./task-tracker-routing.module";
import { TaskTrackerComponent } from "./task-tracker.component";

@NgModule({
  declarations: [
    TaskTrackerComponent,
    TaskComponent,
    TaskAboutComponent,
    TaskHeaderComponent,
    TaskFooterComponent,
    TaskAddBtnComponent,
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    TaskTrackerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
})
export class TaskTrackerModule {}

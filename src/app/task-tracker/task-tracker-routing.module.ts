import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskAboutComponent } from "./components/task-about/task-about.component";
import { TaskTrackerComponent } from "./task-tracker.component";

const routes: Routes = [
  {
    path: "",
    component: TaskTrackerComponent,
  },
  {
    path: "about",
    component: TaskAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskTrackerRoutingModule {}

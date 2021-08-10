import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "task-tracker",
    pathMatch: "full",
  },
  {
    path: "task-tracker",
    loadChildren: () =>
      import("./task-tracker/task-tracker.module").then(
        (m) => m.TaskTrackerModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

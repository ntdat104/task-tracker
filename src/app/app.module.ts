import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ButtonComponent } from "./button/button.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";

//* font
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

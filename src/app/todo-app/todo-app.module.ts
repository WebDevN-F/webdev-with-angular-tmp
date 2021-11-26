import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoAppComponent } from './todo-app.component';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    TodoAppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoAppRoutingModule
  ]
})
export class TodoAppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoAppComponent } from './todo-app.component';

const routes: Routes = [
  {
    path: '', component: TodoAppComponent, children: [
      { path: '', component: TasksComponent, },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }

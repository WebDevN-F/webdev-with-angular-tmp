import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', loadChildren: () => import('./todo-app/todo-app.module').then(m => m.TodoAppModule).catch(() => console.log('TodoAppModule not found')) },
  { path: 'ngrx-quick', loadChildren: () => import('./ngrx-quick-app/ngrx-quick-app.module').then(m => m.NgrxQuickAppModule).catch(() => console.log('NgrxQuickAppModule not found')) },
  { path: 'tools-dcm', loadChildren: () => import('./tools-dcm/tools-dcm.module').then(m => m.ToolsDcmModule).catch(() => console.log('DcmAppModule not found')) },
  { path: '**', redirectTo: 'tools-dcm/document', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

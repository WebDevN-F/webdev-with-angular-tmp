import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./todo-app/todo-app.module').then(m => m.TodoAppModule).catch(() => console.log('TodoAppModule not found')) },
  { path: 'ngrx-quick', loadChildren: () => import('./ngrx-quick-app/ngrx-quick-app.module').then(m => m.NgrxQuickAppModule).catch(() => console.log('NgrxQuickAppModule not found')) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleFormComponent } from './google-form.component';

const routes: Routes = [
  { path: '', component: GoogleFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleFormRoutingModule { }

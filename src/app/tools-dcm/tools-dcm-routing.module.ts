import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsDcmSearchComponent } from './components/tools-dcm-search/tools-dcm-search.component';
import { ToolsDcmComponent } from './tools-dcm.component';

const routes: Routes = [
  {
    path: '', component: ToolsDcmComponent, children: [
      { path: '', component: ToolsDcmSearchComponent },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsDcmRoutingModule { }

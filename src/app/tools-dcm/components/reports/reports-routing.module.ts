import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDocnewComponent } from './report-docnew/report-docnew.component';
import { ReportDocpendingComponent } from './report-docpending/report-docpending.component';
import { ReportShellComponent } from './report-shell/report-shell.component';

const routes: Routes = [
  {
    path: '', component: ReportShellComponent, children: [
      { path: 'report-doc-pending', component: ReportDocnewComponent, data: { title: 'Hồ sơ đang lưu trữ', breadcrumb: 'Quản lý báo cáo' } },
      { path: 'report-doc-new', component: ReportDocpendingComponent, data: { title: 'Hồ sơ chưa lưu trữ', breadcrumb: 'Quản lý báo cáo' } },
      { path: '', redirectTo: 'tools-dcm/document', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

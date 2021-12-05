import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbInitializedGuardGuard } from './services/breadcrumb-initialized-guard.guard';
import { ToolsDcmComponent } from './tools-dcm.component';

const routes: Routes = [
  {
    path: '', component: ToolsDcmComponent,
      canActivate: [BreadcrumbInitializedGuardGuard],
      canActivateChild: [BreadcrumbInitializedGuardGuard],
      children: [
      { path: 'document', loadChildren: () => import('./components/documents/documents.module').then(m => m.DocumentsModule), data: { breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'report', loadChildren: () => import('./components/reports/reports.module').then(m => m.ReportsModule), data: { breadcrumb: 'Quản lý báo cáo' } },
      { path: 'setting', loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule), data: { breadcrumb: 'Quản lý cấu hình' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsDcmRoutingModule { }

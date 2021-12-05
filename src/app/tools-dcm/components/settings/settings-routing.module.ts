import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsDocComponent } from './settings-doc/settings-doc.component';
import { SettingsPermissionComponent } from './settings-permission/settings-permission.component';
import { SettingsShellComponent } from './settings-shell/settings-shell.component';
import { SettingsStoreComponent } from './settings-store/settings-store.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';

const routes: Routes = [
  {
    path: '', component: SettingsShellComponent, children: [
      { path: 'setting-doc', component: SettingsDocComponent, data: { title: 'Cấu hình hồ sơ', breadcrumb: 'Quản lý cấu hình' } },
      { path: 'setting-store', component: SettingsStoreComponent, data: { title: 'Kho lưu trữ', breadcrumb: 'Quản lý cấu hình' } },
      { path: 'setting-permission', component: SettingsPermissionComponent, data: { title: 'Phân quyền hệ thống', breadcrumb: 'Quản lý cấu hình' } },
      { path: 'setting-user', component: SettingsUserComponent, data: { title: 'Cấu hình user', breadcrumb: 'Quản lý cấu hình' } },
      { path: '', redirectTo: 'tools-dcm/document', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

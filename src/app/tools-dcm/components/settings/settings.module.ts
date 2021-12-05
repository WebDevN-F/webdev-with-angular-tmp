import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsShellComponent } from './settings-shell/settings-shell.component';
import { SettingsDocComponent } from './settings-doc/settings-doc.component';
import { SettingsStoreComponent } from './settings-store/settings-store.component';
import { SettingsPermissionComponent } from './settings-permission/settings-permission.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';


@NgModule({
  declarations: [
    SettingsShellComponent,
    SettingsDocComponent,
    SettingsStoreComponent,
    SettingsPermissionComponent,
    SettingsUserComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

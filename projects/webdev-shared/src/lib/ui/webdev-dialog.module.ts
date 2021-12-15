import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerXDirective } from '../core/view-container.directive';
import { ContainerXComponentService } from '../core/view-loading-component.service';
import { AppDialogComponent } from './material/app-dialog.component';
import { AppDialogService } from './app-dialog.service';
import { IAppDialogService } from './app-dialog.interface';

@NgModule({
  declarations: [
    ContainerXDirective,
    AppDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ContainerXComponentService,
    {
      provide: IAppDialogService,
      useClass: AppDialogService
    }
  ],
})
export class WebdevDialogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportShellComponent } from './report-shell/report-shell.component';
import { ReportDocpendingComponent } from './report-docpending/report-docpending.component';
import { ReportDocnewComponent } from './report-docnew/report-docnew.component';


@NgModule({
  declarations: [
    ReportShellComponent,
    ReportDocpendingComponent,
    ReportDocnewComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }

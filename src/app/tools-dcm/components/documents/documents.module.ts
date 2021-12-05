import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocShellComponent } from './doc-shell/doc-shell.component';
import { DocSearchComponent } from './doc-search/doc-search.component';
import { DocStoringComponent } from './doc-storing/doc-storing.component';
import { DocLoanPaymentingComponent } from './doc-loan-paymenting/doc-loan-paymenting.component';
import { DocMoveCrownComponent } from './doc-move-crown/doc-move-crown.component';
import { DocMoveBuComponent } from './doc-move-bu/doc-move-bu.component';
import { DocUpdatingComponent } from './doc-updating/doc-updating.component';
import { DocRevokingComponent } from './doc-revoking/doc-revoking.component';


@NgModule({
  declarations: [
    DocShellComponent,
    DocSearchComponent,
    DocStoringComponent,
    DocLoanPaymentingComponent,
    DocMoveCrownComponent,
    DocMoveBuComponent,
    DocUpdatingComponent,
    DocRevokingComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }

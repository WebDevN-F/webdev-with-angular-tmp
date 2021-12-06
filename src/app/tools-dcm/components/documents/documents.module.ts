import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocShellComponent } from './doc-shell/doc-shell.component';
import { DocSearchComponent } from './doc-search/doc-search.component';
import { DocStoringComponent } from './doc-storing/doc-storing.component';
import { DocLoanPaymentingComponent } from './doc-loan-paymenting/doc-loan-paymenting.component';
import { DocMoveCrownComponent } from './doc-move-crown/doc-move-crown.component';
import { DocMoveBuComponent } from './doc-move-bu/doc-move-bu.component';
import { DocUpdatingComponent } from './doc-updating/doc-updating.component';
import { DocRevokingComponent } from './doc-revoking/doc-revoking.component';
import { ToolsDcmSearchComponent } from '../tools-dcm-search/tools-dcm-search.component';
import { DocSearchListComponent } from './doc-search-list/doc-search-list.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DocShellComponent,
    DocSearchComponent,
    DocStoringComponent,
    DocLoanPaymentingComponent,
    DocMoveCrownComponent,
    DocMoveBuComponent,
    DocUpdatingComponent,
    DocRevokingComponent,
    ToolsDcmSearchComponent,
    DocSearchListComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormlyModule.forRoot(),
    FormlyMatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class DocumentsModule { }

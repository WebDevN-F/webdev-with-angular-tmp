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
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectFormlyComponent } from './ng-select.type';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';

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
    DocSearchListComponent,
    NgSelectFormlyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DocumentsRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'my-autocomplete',
          component: NgSelectFormlyComponent,
        }
      ],
    }),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class DocumentsModule { }

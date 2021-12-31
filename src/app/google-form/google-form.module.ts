import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleFormRoutingModule } from './google-form-routing.module';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { GoogleFormComponent } from './google-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GoogleFormComponent
  ],
  imports: [
    CommonModule,
    GoogleFormRoutingModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Hãy nhập vào câu trả lời của bạn.' },
      ],
    }),
    ReactiveFormsModule,
    FormlyMaterialModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule
  ],
})
export class GoogleFormModule { }

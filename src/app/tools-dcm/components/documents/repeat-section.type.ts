import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="display-flex">
      <mat-icon (click)="remove(i)">close</mat-icon>
      <formly-field class="col" [field]="field"></formly-field>
    </div>

    <div style="margin-bottom:10px;">
      <button mat-flat-button type="button" (click)="add()">{{ to['addText'] }}</button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType { }

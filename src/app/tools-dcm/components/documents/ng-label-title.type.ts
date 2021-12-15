import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-ng-label-title',
  template: `
    <h3>{{ to.label }}<h3>
  `,
})
export class NgLabelTitleFormlyComponent extends FieldType {
}

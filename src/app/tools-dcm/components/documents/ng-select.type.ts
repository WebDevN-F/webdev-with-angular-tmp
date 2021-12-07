import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-ng-select',
  template: `
    <ng-select
      appearance="outline"
      [formControl]="formControl"
      [items]="options$ | async"
      [placeholder]="to.label!"
      [bindValue]="to['bindValue'] || 'value'"
      [class.is-invalid]="showError">
    </ng-select>
  `,
})
export class NgSelectFormlyComponent extends FieldType implements OnInit {
  options$: any;
  loaded = false;
  constructor(private config: NgSelectConfig) {
    super();
    this.config.notFoundText = 'No data match found';
  }
  ngOnInit() {
    this.options$ = this.to.options;
    this.loaded = true;
  }
}

// [formControl]="formControl"

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';

const formlyRow = (fieldConfig: FormlyFieldConfig[]) => {
  return {
    fieldGroupClassName: 'display-flex',
    fieldGroup: fieldConfig,
  }
}
@Component({
  selector: 'app-tools-dcm-search',
  templateUrl: './tools-dcm-search.component.html',
  styleUrls: ['./tools-dcm-search.component.scss']
})
export class ToolsDcmSearchComponent implements OnInit {
  faSearch = faSearch;
  faRedo = faRedo;
  form = new FormGroup({});
  model = { };

  fields: FormlyFieldConfig[] = [
    formlyRow([
      {
        key: 'branchCode',
        type: 'input',
        templateOptions: {
          label: 'Chi nhánh quản lý hồ sơ',
          placeholder: 'Enter branch',
        },
        focus: true,
        className: 'flex-6',
      },
      {
        key: 'employeeCode',
        type: 'input',
        templateOptions: {
          label: 'Cán bộ quản lý hồ sơ',
          placeholder: 'Enter employee code',
        },
        className: 'flex-6',
      },
    ]),
    formlyRow([
      {
        key: 'groupCode',
        type: 'input',
        templateOptions: {
          label: 'Nhóm hồ sơ',
          placeholder: 'Enter group code',
        },
        className: 'flex-6',
      },
      {
        key: 'categoryCode',
        type: 'input',
        templateOptions: {
          label: 'Loại hồ sơ',
          placeholder: 'Enter category code',
        },
        className: 'flex-6',
      },
    ]),
    formlyRow([
      {
        key: 'rangeDate',
        type: 'input',
        templateOptions: {
          label: 'Từ ngày - đến ngày',
          placeholder: 'Từ ngày - đến ngày',
        },
        className: 'flex-6',
      },
      {
        key: 'status',
        type: 'input',
        templateOptions: {
          label: 'Trạng thái hồ sơ',
          placeholder: 'Trạng thái hồ sơ',
        },
        className: 'flex-6',
      },
    ]),
    formlyRow([
      {
        key: 'nameOther',
        type: 'input',
        templateOptions: {
          label: 'Thông tin khác',
          placeholder: 'Thông tin khác',
        },
        className: 'flex-1',
      }
    ])

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(model: any): void {
    console.log(this.form.valid);

    console.log(model);
  }

  onRedoButton() {
    this.form.reset();
  }

}

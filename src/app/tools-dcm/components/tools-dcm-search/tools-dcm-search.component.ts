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
        className: 'flex-1',
      },
      {
        key: 'employeeCode',
        type: 'input',
        templateOptions: {
          label: 'Cán bộ quản lý hồ sơ',
          placeholder: 'Enter employee code',
        },
        className: 'flex-1',
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
        className: 'flex-1',
      },
      {
        key: 'categoryCode',
        type: 'input',
        templateOptions: {
          label: 'Loại hồ sơ',
          placeholder: 'Enter category code',
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'startDate',
            type: 'datepicker',
            templateOptions: {
              label: 'Từ ngày',
              placeholder: 'Từ ngày - đến ngày',
              datepickerOptions: {
                min: new Date(2020, 12, 1),
                max: new Date(2025, 12, 1)
              },
            },
            className: 'flex-1',
          },
          {
            key: 'endDate',
            type: 'datepicker',
            templateOptions: {
              label: 'đến ngày',
              placeholder: 'Từ ngày - đến ngày',
              datepickerOptions: {
                min: new Date(2020, 12, 1),
                max: new Date(2025, 12, 1)
              },
            },
            className: 'flex-1 pr-0',
          },
        ],
        className: 'flex-1',
      },

      {
        key: 'status',
        type: 'input',
        templateOptions: {
          label: 'Trạng thái hồ sơ',
          placeholder: 'Trạng thái hồ sơ',
        },
        className: 'flex-1',
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

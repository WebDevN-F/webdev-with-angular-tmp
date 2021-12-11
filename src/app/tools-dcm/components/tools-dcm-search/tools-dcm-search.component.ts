import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DataService } from '../../services/data.service';

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
  @Output() onSearch = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  faSearch = faSearch;
  faRedo = faRedo;
  form = new FormGroup({});
  model = { };
  title = 'Tìm kiếm hồ sơ';
  textButtonReset = 'Khôi phục mặc định';
  textButtonSearch = 'Tìm kiếm';

  fields: FormlyFieldConfig[] = [
    formlyRow([
      {
        key: 'branchCode',
        type: 'my-autocomplete',
        // type: 'select', // <select>
        templateOptions: {
          label: 'Chi nhánh quản lý hồ sơ',
          options: this.dataService.getBranchs().pipe(map(data => data.map(item => {
            return {
              label: item.value ? `Chi nhánh ${item.label}` : item.label,
              value: item.value,
            }
          }))),
        },
        className: 'flex-1',
      },
      {
        key: 'employeeCode',
        // type: 'select',
        type: 'my-autocomplete',
        templateOptions: {
          label: 'Cán bộ quản lý hồ sơ',
          placeholder: 'Enter employee code',
          options: this.dataService.getBranchs().pipe(map(data => data.map(item => {
            return {
              label: item.value ? `Cán bộ ${item.label}` : item.label,
              value: item.value,
            }
          }))),
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'groupCode',
        type: 'my-autocomplete',
        templateOptions: {
          label: 'Nhóm hồ sơ',
          placeholder: 'Enter group code',
          options: this.dataService.getBranchs().pipe(map(data => data.map(item => {
            return {
              label: item.value ? `Nhóm hồ sơ ${item.label}` : item.label,
              value: item.value,
            }
          }))),
        },
        className: 'flex-1',
      },
      {
        key: 'categoryCode',
        type: 'my-autocomplete',
        templateOptions: {
          label: 'Loại hồ sơ',
          placeholder: 'Enter category code',
          options: this.dataService.getBranchs().pipe(map(data => data.map(item => {
            return {
              label: item.value ? `Loại hồ sơ ${item.label}` : item.label,
              value: item.value,
            }
          }))),
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
        type: 'select',
        templateOptions: {
          label: 'Trạng thái hồ sơ',
          placeholder: 'Trạng thái hồ sơ',
          options: [
            { label: 'Chờ xử lý', value: '0' },
            { label: 'Đang xử lý', value: '1' },
            { label: 'Đã xử lý', value: '2' },
            { label: 'Đã hủy', value: '3' },
          ],
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.onSearch.emit(value);
    }
  }

  onRedoButton(): void {
    this.form.reset();
    this.onReset.emit();
  }

}

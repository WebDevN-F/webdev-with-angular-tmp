import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { map } from 'rxjs/internal/operators/map';
import { DataService } from '.././../../services/data.service';

const formlyRow = (fieldConfig: FormlyFieldConfig[]) => {
  return {
    fieldGroupClassName: 'display-flex',
    fieldGroup: fieldConfig,
  }
}

@Component({
  selector: 'app-doc-storing',
  templateUrl: './doc-storing.component.html',
  styleUrls: ['./doc-storing.component.scss']
})
export class DocStoringComponent implements OnInit {
  form = new FormGroup({});
  model = {
    cifItems: []
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    formlyRow([
      {
        type: 'my-label',
        templateOptions: {
          label: 'Thông tin chung',
        },
        className: 'flex-1',
      },
    ]),
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

    ]),
    formlyRow([
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
        key: 'timeStore',
        type: 'datepicker',
        templateOptions: {
          label: 'Thời gian lưu trữ',
          placeholder: 'ngày/tháng/năm',
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        type: 'my-label',
        templateOptions: {
          label: 'Thông tin hồ sơ',
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'losId',
        type: 'input',
        templateOptions: {
          label: 'Số hợp đồng',
          placeholder: 'Nhập số hợp đồng',
        },
        className: 'flex-1',
      }
    ]),

    formlyRow([
      {
        key: 'sealCode',
        type: 'input',
        templateOptions: {
          label: 'Mã seal hồ sơ',
          placeholder: 'Nhập mã seal hồ sơ',
        },
        className: 'flex-1',
      }
    ]),
    formlyRow([
      {
        key: 'cif',
        type: 'input',
        templateOptions: {
          label: 'Số Cif',
          placeholder: '',
        },
        className: 'flex-1',
        hideExpression: 'model.cifItems && model.cifItems.length > 0',
      }
    ]),
    {
      key: 'cifItems',
      type: 'repeat',
      templateOptions: {
        addText: '(+) Thêm số CIF',
      },
      fieldArray: {
        fieldGroupClassName: 'display-flex',
        className: 'flex-1',
        type: 'input',
        key: 'cif',
        expressionProperties: {
          'templateOptions.label': '"Số cif " + (parseInt(field.key)+1)'
        }
      },
    },

    formlyRow([
      {
        key: 'fullName',
        type: 'input',
        templateOptions: {
          label: 'Họ tên khách hàng',
        },
        className: 'flex-1',
      }
    ]),
    formlyRow([
      {
        key: 'stack',
        type: 'input',
        templateOptions: {
          label: 'Tủ/kệ',
        },
        className: 'flex-1',
      },
      {
        key: 'track',
        type: 'input',
        templateOptions: {
          label: 'Ngăn/Giá',
        },
        className: 'flex-1',
      }
    ]),
    formlyRow([
      {
        key: 'note',
        type: 'input',
        templateOptions: {
          label: 'Ghi chú',
        },
        className: 'flex-1',
      }
    ]),

  ];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      alert(JSON.stringify(value));
    }
  }
}

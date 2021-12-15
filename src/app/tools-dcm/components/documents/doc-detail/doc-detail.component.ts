import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentInfo } from '../../../models/document.model';
import { IAppDialogService } from '@webdev/ui/shared';

const formlyRow = (fieldConfig: FormlyFieldConfig[]) => {
  return {
    fieldGroupClassName: 'display-flex',
    fieldGroup: fieldConfig,
  }
}

@Component({
  selector: 'app-doc-detail',
  templateUrl: './doc-detail.component.html',
  styleUrls: ['./doc-detail.component.scss']
})
export class DocDetailComponent implements OnInit {
  document!: DocumentInfo;
  isLoadingResults = true;
  form = new FormGroup({});
  model = { };
  title = 'Thông tin chi tiết hồ sơ';

  columnsToDisplay = [
    // 'id', 'losId', 'cif', 'fullName', 'timeStore', 'sealCode', 'stack', 'track', 'crown', 'sealCrown', 'status'
    { columnDef: 'updatedDate', header: 'Ngày thay đổi', cell: (element: any, column: string) => `${element[column] ? new Date(element[column]).toDateString() : ``}` },
    { columnDef: 'statusName', header: 'Trạng thái', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'updatedBy', header: 'Người đề nghị', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
  ]

  fields: FormlyFieldConfig[] = [
    formlyRow([
      {
        key: 'branchName',
        type: 'input',
        templateOptions: {
          label: 'Chi nhánh quản lý hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'userManager',
        type: 'input',
        templateOptions: {
          label: 'Cán bộ quản lý hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'groupName',
        type: 'input',
        templateOptions: {
          label: 'Nhóm hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'categoryName',
        type: 'input',
        templateOptions: {
          label: 'Loại hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'losId',
        type: 'input',
        templateOptions: {
          label: 'Số LOS',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'cif',
        type: 'input',
        templateOptions: {
          label: 'SỐ CIF',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'fullName',
        type: 'input',
        templateOptions: {
          label: 'Họ tên khách hàng',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'timeStore',
        type: 'input',
        templateOptions: {
          label: 'Thời gian lưu trữ',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'sealCode',
        type: 'input',
        templateOptions: {
          label: 'Mã seal hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'statusName',
        type: 'input',
        templateOptions: {
          label: 'Trạng thái hồ sơ',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'stack',
        type: 'input',
        templateOptions: {
          label: 'Tủ/Kệ',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'track',
        type: 'input',
        templateOptions: {
          label: 'Ngăn/Giá',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),
    formlyRow([
      {
        key: 'crown',
        type: 'input',
        templateOptions: {
          label: 'Mã Crown',
          readonly: true,
        },
        className: 'flex-1',
      },
      {
        key: 'sealCrown',
        type: 'input',
        templateOptions: {
          label: 'Mã seal Crown',
          readonly: true,
        },
        className: 'flex-1',
      },
    ]),

  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDialogService: IAppDialogService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      const documentLocal = localStorage.getItem(id);
      if (documentLocal) {
        setTimeout(() => {
          this.document = JSON.parse(documentLocal);
          console.log(this.document);
          this.isLoadingResults = false;
          this.form.patchValue(this.document);
        }, 100);
      }
    });
  }

  onLeaveout() {
    this.router.navigate(['/tools-dcm/document/doc-search']);
  }

  async onQrCode() {
    const qrcodecomp = await import('../doc-qrcode/doc-qrcode.component').then(c => c.DocQrcodeComponent).catch(err => {
      console.log(err);
      return;
    });

    const dialogRef = this.appDialogService.openDialogCustom<any>({
      title: 'QRCode',
      buttonNo: {
        isVisible: false,
        text: ''
      },
      buttonYes: {
        isVisible: true,
        text: 'Ok'
      },
      component: qrcodecomp,
      width: '400px',
    })

    const { componentInstance } = dialogRef;

    setTimeout(() => {
      componentInstance.componentRef.instance.qrCodeValue = JSON.stringify(this.document);
    }, 100);

  }
}

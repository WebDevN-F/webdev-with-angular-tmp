import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of as observableOf, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IAppDialogService } from '@webdev/ui/shared';
import { DataService } from 'src/app/tools-dcm/services/data.service';

const formlyRow = (fieldConfig: FormlyFieldConfig[]) => {
  return {
    fieldGroupClassName: 'display-flex',
    fieldGroup: fieldConfig,
  }
}

@Component({
  selector: 'app-doc-loan-paymenting',
  templateUrl: './doc-loan-paymenting.component.html',
  styleUrls: ['./doc-loan-paymenting.component.scss']
})
export class DocLoanPaymentingComponent implements OnInit, OnDestroy {
  private componentDestroyed$: Subject<boolean> = new Subject()

  documents!: any[];
  isLoadingResults = true;

  columnsToDisplay = [
    { columnDef: 'position', header: 'No', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'losId', header: 'Số Hợp đồng', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'cif', header: 'Số CIF', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'fullName', header: 'Họ tên khách hàng', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'stack', header: 'Tủ/kệ', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'track', header: 'Ngăn/giá', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'sealCode', header: 'Mã Seal Hồ sơ', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'timeRetry', header: 'Thời gian hoàn trả', cell: (element: any, column: string) => `${element[column] ? new Date(element[column]).toDateString() : ``}` },
    { columnDef: 'hinhthucmuon', header: 'Hình thức mượn', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'note', header: 'Ghi Chú', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
  ]

  form = new FormGroup({});
  model = {};

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
        key: 'user',
        type: 'input',
        defaultValue: 'Nguyễn Văn A',
        templateOptions: {
          label: 'Người mượn/Trả hồ sơ',
          placeholder: '',
        },
        className: 'flex-1',
      }
    ]),
    formlyRow([
      {
        type: 'my-label',
        templateOptions: {
          label: '',
        },
        className: 'flex-1',
      },
      {
        key: 'searchQuery',
        type: 'input',
        defaultValue: '',
        templateOptions: {
          label: 'Tìm kiếm',
          placeholder: 'Tìm kiếm',
          click: (field, $event) => {
            this.onOpenSearchForm().then();
          },
        },
        className: 'flex-1',
      }
    ]),

  ];
  constructor(
    private appDialogService: IAppDialogService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  async onOpenSearchForm() {
    const qrcodecomp = await import('../../tools-dcm-search/tools-dcm-search.component').then(c => c.ToolsDcmSearchComponent).catch(err => {
      console.log(err);
      return;
    });

    const dialogRef = this.appDialogService.openDialogCustom<any>({
      title: 'Tìm kiếm hồ sơ',
      buttonNo: {
        isVisible: false,
        text: ''
      },
      buttonYes: {
        isVisible: false,
        text: ''
      },
      component: qrcodecomp,
      width: '100%',
    })

    const { componentInstance } = dialogRef;

    setTimeout(() => {
      componentInstance.componentRef.instance.onSearch.subscribe((query: any) => {
        this.ondcmSearch(query);
        dialogRef.close();
      })
    }, 100);

  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }

  ondcmSearch(event: any) {
    console.log(`ondcmSearch`, event);
    this.dataService.getDocuments()
      .pipe(
        startWith([]),
        switchMap((data) => {
          this.isLoadingResults = true;
          return observableOf(data);
        }),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(data => {
        data = data.map((item, index) => {
          item['position'] = index+1;
          return item;
        })
        this.documents = data;
        setTimeout(() => {
          this.isLoadingResults = false
        }, 2000);
      });
  }

}

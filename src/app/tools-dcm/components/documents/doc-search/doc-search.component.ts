import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppDialogService } from '@webdev/ui/shared';
import { of as observableOf, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.scss']
})
export class DocSearchComponent implements OnInit, OnDestroy {
  /**
   * Using a Subject as a replacement for the `takeUntil` operator
   * https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
   */
  private componentDestroyed$: Subject<boolean> = new Subject()

  documents!: any[];
  isLoadingResults = true;

  columnsToDisplay = [
    // 'id', 'losId', 'cif', 'fullName', 'timeStore', 'sealCode', 'stack', 'track', 'crown', 'sealCrown', 'status'
    { columnDef: 'position', header: 'No', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'losId', header: 'Số LOS', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'cif', header: 'Số CIF', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'fullName', header: 'Họ tên khách hàng', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'timeStore', header: 'Thời gian lưu trữ', width: '125px', cell: (element: any, column: string) => `${element[column] ? element[column]+' Tháng' : ``}` },
    { columnDef: 'sealCode', header: 'Mã Seal', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'stack', header: 'Tủ/kệ', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'track', header: 'Ngăn/giá', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'crown', header: 'Mã thùng', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'sealCrown', header: 'Mã seal thùng', cell: (element: any, column: string) => `${element[column] ? element[column] : ``}` },
    { columnDef: 'status', header: 'Trạng thái hồ sơ', cell: (element: any, column: string) => this.selectStatus(element[column]) },
  ]

  constructor(
    private dataService: DataService,
    private appdialogService: IAppDialogService
  ) { }

  ngOnInit(): void {

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

  onReset() {
    // this.documents = [];
    // setTimeout(() => {
    //   this.isLoadingResults = false
    // }, 2000);
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }

  onClickRowSearch(event: any) {
    console.log(event)

  }

  private selectStatus(status: number) {
    if (!status) {
      return '';
    }
    switch (status) {
      case 0:
        return 'Chưa xử lý';
      case 1:
        return 'Lưu kho ĐVKD';
      case 2:
        return 'Đã xử lý';
      case 3:
        return 'Đã hủy';
      default:
        return 'unknown';
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of as observableOf, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { DocumentInfo } from 'src/app/tools-dcm/models/document.model';
import { DataService } from '../../../services/data.service';

const webdevDocument = 'WebDev.documents'

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
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      const data = localStorage.getItem(webdevDocument);
      if (data) {
        this.documents = JSON.parse(data);
        this.isLoadingResults = false
      }
    }, 100);
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
        localStorage.setItem(webdevDocument, JSON.stringify(data));
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
    if (!event) { return; }
    const document: DocumentInfo = event as DocumentInfo;
    document['branchName'] = 'VIB Hà Nội';
    document['groupName'] = 'Lending Document';
    document['userManager'] = 'Nguyễn Văn A';
    document['categoryName'] = 'Hồ sơ vay vốn, cập bảo lãnh';
    document['statusName'] = this.selectStatus(document.status as number),
    document.documentHistories = [
      { documentId: document.id, status: 1, statusName: this.selectStatus(1), updatedDate: new Date(2021, 12, 1), updatedBy: 'Nguyễn Thị Bích Liên' },
      { documentId: document.id, status: 1, statusName: this.selectStatus(1), updatedDate: new Date(2021, 12, 2), updatedBy: 'Nguyễn Thị Bích Liên' },
      { documentId: document.id, status: 2, statusName: this.selectStatus(2), updatedDate: new Date(2021, 12, 3), updatedBy: 'Nguyễn Thị Bích Liên' },
      { documentId: document.id, status: 3, statusName: this.selectStatus(3), updatedDate: new Date(2021, 12, 4), updatedBy: 'Nguyễn Thị Bích Liên' },
    ];
    localStorage.setItem(document.id, JSON.stringify(document));
    setTimeout(() => {
      this.router.navigate([`/tools-dcm/document/doc-detail/${document.id}`]);
    }, 100);
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
        return 'Cho mượn toàn phần';
      case 3:
        return 'Mất thất lạc';
      default:
        return 'unknown';
    }
  }

}

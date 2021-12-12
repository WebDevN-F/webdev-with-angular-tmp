import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { DocumentInfo } from '../../../models/document.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

// https://stackoverflow.com/questions/51346447/mat-table-with-ngfor-and-sorting

@Component({
  selector: 'app-doc-search-list',
  templateUrl: './doc-search-list.component.html',
  styleUrls: ['./doc-search-list.component.scss']
})
export class DocSearchListComponent implements OnChanges {
  @Input() data!: DocumentInfo[];
  @Input() isLoadingResults!: boolean;
  @Input() backendSort!: boolean;
  @Output() onSortChange: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() onPageChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickRow: EventEmitter<any> = new EventEmitter<any>();

  columns: { columnDef: string; header: string; [key: string]: any; }[] = [
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
  ];

  displayedColumns: string[] = this.columns.map(c => c.columnDef);

  dataSource = new MatTableDataSource<DocumentInfo>(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  pageIndex = 0;
  pageSize = 10;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = changes['data'].currentValue
      console.log(this.dataSource.data);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator
        if (!this.backendSort) {
          this.dataSource.sort = this.sort
        }
      }, 100);
    }
  }

  sortData(sort: Sort) {
    if (!this.backendSort) {
      return;
    }
    console.log('backend sort', sort);
    this.onSortChange.emit(sort);
  }

  pageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.onPageChange.emit(event);
  }

  clickedRows(row: any) {
    this.onClickRow.emit(row);
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

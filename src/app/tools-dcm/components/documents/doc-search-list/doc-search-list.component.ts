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

  displayedColumns: { field: string; column: string;[key: string]: any; }[] = [
    // 'id', 'losId', 'cif', 'fullName', 'timeStore', 'sealCode', 'stack', 'track', 'crown', 'sealCrown', 'status'
    // { field: 'id', column: 'ID', hidden: true },
    { field: 'losId', column: 'Số LOS' },
    { field: 'cif', column: 'Số CIF' },
    { field: 'fullName', column: 'Họ tên khách hàng' },
    { field: 'timeStore', column: 'Thời gian lưu trữ' },
    { field: 'sealCode', column: 'Mã Seal' },
    { field: 'stack', column: 'Tủ/kệ' },
    { field: 'track', column: 'Ngăn/giá' },
    { field: 'crown', column: 'Mã thùng' },
    { field: 'sealCrown', column: 'Mã seal thùng' },
    { field: 'status', column: 'Trạng thái hồ sơ' },
  ];
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
}

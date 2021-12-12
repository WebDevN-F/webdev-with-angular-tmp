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
  @Input() title: string = '';
  @Input() data!: DocumentInfo[];
  @Input() isLoadingResults!: boolean;
  @Input() backendSort!: boolean;
  @Output() onSortChange: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() onPageChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickRow: EventEmitter<any> = new EventEmitter<any>();
  @Input() columns: { columnDef: string; header: string; [key: string]: any; }[] = [];

  displayedColumns: string[] = [];

  dataSource = new MatTableDataSource<DocumentInfo>(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  pageIndex = 0;
  pageSize = 10;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }

    if (changes['data'] && !changes['data'].isFirstChange()) {
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

}

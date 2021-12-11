import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DocumentInfo } from '../../../models/document.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doc-search-list',
  templateUrl: './doc-search-list.component.html',
  styleUrls: ['./doc-search-list.component.scss']
})
export class DocSearchListComponent implements OnChanges, AfterViewInit {
  @Input() data!: DocumentInfo[];
  displayedColumns: string[] = ['losId', 'cif', 'fullName', 'timeStore', 'stack', 'track', 'crown', 'sealCrown', 'status'];
  dataSource = new MatTableDataSource<DocumentInfo>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data'].isFirstChange()) {
      this.dataSource.data = changes['data'].currentValue
      console.log(this.dataSource.data);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

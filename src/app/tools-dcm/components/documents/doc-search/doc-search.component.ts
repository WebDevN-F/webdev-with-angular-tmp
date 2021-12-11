import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.scss']
})
export class DocSearchComponent implements OnInit {

  documents$: Observable<any[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ondcmSearch(event: any) {
    console.log(`ondcmSearch`, event);
    this.documents$ = this.dataService.getDocuments();
  }

  onReset() {
    this.documents$ = undefined;
  }

}

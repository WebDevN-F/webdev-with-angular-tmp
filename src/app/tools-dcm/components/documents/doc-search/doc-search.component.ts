import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.scss']
})
export class DocSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ondcmSearch(event: any) {
    console.log(`ondcmSearch`, event);
  }

}

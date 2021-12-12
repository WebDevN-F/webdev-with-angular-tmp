import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) { }

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
        this.documents = data;
        setTimeout(() => {
          this.isLoadingResults = false
        }, 2000);
      });
  }

  onReset() {
    this.documents = [];
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }

}

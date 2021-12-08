import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBranchs() {
    return of([
      {
        value: null,
        label: ' -- '
      },
      {
        value: 1,
        label: '001'
      },
      {
        value: 2,
        label: '002'
      },
      {
        value: 3,
        label: '003'
      },
      {
        value: 4,
        label: '004'
      }
    ]);
  }
}

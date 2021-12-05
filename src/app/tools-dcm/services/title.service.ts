import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titlePage$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  setTitlePage(title: string) {
    this.titlePage$.next(title);
  }

  getTitlePage() {
    return this.titlePage$.asObservable();
  }
}

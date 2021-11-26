import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxQuickAppComponent } from './ngrx-quick-app.component';

describe('NgrxQuickAppComponent', () => {
  let component: NgrxQuickAppComponent;
  let fixture: ComponentFixture<NgrxQuickAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxQuickAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxQuickAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDocpendingComponent } from './report-docpending.component';

describe('ReportDocpendingComponent', () => {
  let component: ReportDocpendingComponent;
  let fixture: ComponentFixture<ReportDocpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDocpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDocpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

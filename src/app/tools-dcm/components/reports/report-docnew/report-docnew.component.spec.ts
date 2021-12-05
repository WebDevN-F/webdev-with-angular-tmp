import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDocnewComponent } from './report-docnew.component';

describe('ReportDocnewComponent', () => {
  let component: ReportDocnewComponent;
  let fixture: ComponentFixture<ReportDocnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDocnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDocnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

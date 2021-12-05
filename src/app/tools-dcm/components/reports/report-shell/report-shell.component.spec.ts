import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportShellComponent } from './report-shell.component';

describe('ReportShellComponent', () => {
  let component: ReportShellComponent;
  let fixture: ComponentFixture<ReportShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

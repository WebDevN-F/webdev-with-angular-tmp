import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLoanPaymentingComponent } from './doc-loan-paymenting.component';

describe('DocLoanPaymentingComponent', () => {
  let component: DocLoanPaymentingComponent;
  let fixture: ComponentFixture<DocLoanPaymentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocLoanPaymentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLoanPaymentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

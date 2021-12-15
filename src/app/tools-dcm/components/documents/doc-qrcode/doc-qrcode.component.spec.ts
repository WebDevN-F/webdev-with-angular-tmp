import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocQrcodeComponent } from './doc-qrcode.component';

describe('DocQrcodeComponent', () => {
  let component: DocQrcodeComponent;
  let fixture: ComponentFixture<DocQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocQrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRevokingComponent } from './doc-revoking.component';

describe('DocRevokingComponent', () => {
  let component: DocRevokingComponent;
  let fixture: ComponentFixture<DocRevokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocRevokingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRevokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUpdatingComponent } from './doc-updating.component';

describe('DocUpdatingComponent', () => {
  let component: DocUpdatingComponent;
  let fixture: ComponentFixture<DocUpdatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocUpdatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

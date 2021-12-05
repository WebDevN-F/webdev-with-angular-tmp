import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSearchListComponent } from './doc-search-list.component';

describe('DocSearchListComponent', () => {
  let component: DocSearchListComponent;
  let fixture: ComponentFixture<DocSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

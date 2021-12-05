import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocStoringComponent } from './doc-storing.component';

describe('DocStoringComponent', () => {
  let component: DocStoringComponent;
  let fixture: ComponentFixture<DocStoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocStoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

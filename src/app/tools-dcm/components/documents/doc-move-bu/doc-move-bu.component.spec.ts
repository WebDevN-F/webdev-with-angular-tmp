import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMoveBuComponent } from './doc-move-bu.component';

describe('DocMoveBuComponent', () => {
  let component: DocMoveBuComponent;
  let fixture: ComponentFixture<DocMoveBuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMoveBuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocMoveBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

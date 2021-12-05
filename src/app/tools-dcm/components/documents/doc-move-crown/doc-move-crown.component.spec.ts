import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMoveCrownComponent } from './doc-move-crown.component';

describe('DocMoveCrownComponent', () => {
  let component: DocMoveCrownComponent;
  let fixture: ComponentFixture<DocMoveCrownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMoveCrownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocMoveCrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

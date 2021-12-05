import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocShellComponent } from './doc-shell.component';

describe('DocShellComponent', () => {
  let component: DocShellComponent;
  let fixture: ComponentFixture<DocShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonXComponent } from './button-x.component';

describe('ButtonXComponent', () => {
  let component: ButtonXComponent;
  let fixture: ComponentFixture<ButtonXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

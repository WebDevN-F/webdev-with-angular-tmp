import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevLayoutsComponent } from './webdev-layouts.component';

describe('WebdevLayoutsComponent', () => {
  let component: WebdevLayoutsComponent;
  let fixture: ComponentFixture<WebdevLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDcmComponent } from './tools-dcm.component';

describe('ToolsDcmComponent', () => {
  let component: ToolsDcmComponent;
  let fixture: ComponentFixture<ToolsDcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsDcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsDcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

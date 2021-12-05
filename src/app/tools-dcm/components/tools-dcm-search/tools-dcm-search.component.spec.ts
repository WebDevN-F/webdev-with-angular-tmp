import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDcmSearchComponent } from './tools-dcm-search.component';

describe('ToolsDcmSearchComponent', () => {
  let component: ToolsDcmSearchComponent;
  let fixture: ComponentFixture<ToolsDcmSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsDcmSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsDcmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

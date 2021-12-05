import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDocComponent } from './settings-doc.component';

describe('SettingsDocComponent', () => {
  let component: SettingsDocComponent;
  let fixture: ComponentFixture<SettingsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

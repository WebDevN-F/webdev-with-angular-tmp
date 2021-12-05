import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPermissionComponent } from './settings-permission.component';

describe('SettingsPermissionComponent', () => {
  let component: SettingsPermissionComponent;
  let fixture: ComponentFixture<SettingsPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

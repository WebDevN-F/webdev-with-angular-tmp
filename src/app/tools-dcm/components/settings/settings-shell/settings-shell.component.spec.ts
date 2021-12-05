import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsShellComponent } from './settings-shell.component';

describe('SettingsShellComponent', () => {
  let component: SettingsShellComponent;
  let fixture: ComponentFixture<SettingsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

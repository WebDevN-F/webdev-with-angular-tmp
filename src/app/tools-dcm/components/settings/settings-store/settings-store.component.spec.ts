import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsStoreComponent } from './settings-store.component';

describe('SettingsStoreComponent', () => {
  let component: SettingsStoreComponent;
  let fixture: ComponentFixture<SettingsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

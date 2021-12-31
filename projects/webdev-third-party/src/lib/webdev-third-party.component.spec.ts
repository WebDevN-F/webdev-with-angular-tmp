import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevThirdPartyComponent } from './webdev-third-party.component';

describe('WebdevThirdPartyComponent', () => {
  let component: WebdevThirdPartyComponent;
  let fixture: ComponentFixture<WebdevThirdPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevThirdPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

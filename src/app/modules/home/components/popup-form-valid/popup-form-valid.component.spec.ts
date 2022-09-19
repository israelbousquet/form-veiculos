import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFormValidComponent } from './popup-form-valid.component';

describe('PopupFormValidComponent', () => {
  let component: PopupFormValidComponent;
  let fixture: ComponentFixture<PopupFormValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFormValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

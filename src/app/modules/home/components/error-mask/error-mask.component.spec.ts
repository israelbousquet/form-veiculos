import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMaskComponent } from './error-mask.component';

describe('ErrorMaskComponent', () => {
  let component: ErrorMaskComponent;
  let fixture: ComponentFixture<ErrorMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

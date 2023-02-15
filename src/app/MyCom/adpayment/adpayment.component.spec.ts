import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpaymentComponent } from './adpayment.component';

describe('AdpaymentComponent', () => {
  let component: AdpaymentComponent;
  let fixture: ComponentFixture<AdpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

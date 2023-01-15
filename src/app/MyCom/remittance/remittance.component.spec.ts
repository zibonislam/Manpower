import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceComponent } from './remittance.component';

describe('RemittanceComponent', () => {
  let component: RemittanceComponent;
  let fixture: ComponentFixture<RemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemittanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

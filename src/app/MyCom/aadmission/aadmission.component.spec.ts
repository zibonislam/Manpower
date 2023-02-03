import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadmissionComponent } from './aadmission.component';

describe('AadmissionComponent', () => {
  let component: AadmissionComponent;
  let fixture: ComponentFixture<AadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

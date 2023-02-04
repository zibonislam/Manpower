import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaadmissionComponent } from './aaadmission.component';

describe('AaadmissionComponent', () => {
  let component: AaadmissionComponent;
  let fixture: ComponentFixture<AaadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

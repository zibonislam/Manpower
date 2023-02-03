import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RplacementComponent } from './rplacement.component';

describe('RplacementComponent', () => {
  let component: RplacementComponent;
  let fixture: ComponentFixture<RplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RworkpermitComponent } from './rworkpermit.component';

describe('RworkpermitComponent', () => {
  let component: RworkpermitComponent;
  let fixture: ComponentFixture<RworkpermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RworkpermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RworkpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

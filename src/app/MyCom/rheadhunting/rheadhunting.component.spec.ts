import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheadhuntingComponent } from './rheadhunting.component';

describe('RheadhuntingComponent', () => {
  let component: RheadhuntingComponent;
  let fixture: ComponentFixture<RheadhuntingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheadhuntingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheadhuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

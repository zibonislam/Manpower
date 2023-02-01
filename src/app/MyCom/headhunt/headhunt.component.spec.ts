import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadhuntComponent } from './headhunt.component';

describe('HeadhuntComponent', () => {
  let component: HeadhuntComponent;
  let fixture: ComponentFixture<HeadhuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadhuntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadhuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

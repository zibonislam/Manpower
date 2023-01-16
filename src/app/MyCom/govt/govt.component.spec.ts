import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtComponent } from './govt.component';

describe('GovtComponent', () => {
  let component: GovtComponent;
  let fixture: ComponentFixture<GovtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

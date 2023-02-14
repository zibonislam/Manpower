import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverificationComponent } from './adverification.component';

describe('AdverificationComponent', () => {
  let component: AdverificationComponent;
  let fixture: ComponentFixture<AdverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

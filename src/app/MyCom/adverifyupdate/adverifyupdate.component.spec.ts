import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverifyupdateComponent } from './adverifyupdate.component';

describe('AdverifyupdateComponent', () => {
  let component: AdverifyupdateComponent;
  let fixture: ComponentFixture<AdverifyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverifyupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdverifyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

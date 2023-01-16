import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignComponent } from './foreign.component';

describe('ForeignComponent', () => {
  let component: ForeignComponent;
  let fixture: ComponentFixture<ForeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapplyComponent } from './vapply.component';

describe('VapplyComponent', () => {
  let component: VapplyComponent;
  let fixture: ComponentFixture<VapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

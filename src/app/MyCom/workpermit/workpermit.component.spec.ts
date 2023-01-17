import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpermitComponent } from './workpermit.component';

describe('WorkpermitComponent', () => {
  let component: WorkpermitComponent;
  let fixture: ComponentFixture<WorkpermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

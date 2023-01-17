import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VstatusComponent } from './vstatus.component';

describe('VstatusComponent', () => {
  let component: VstatusComponent;
  let fixture: ComponentFixture<VstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

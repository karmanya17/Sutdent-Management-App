import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenancedateComponent } from './attenancedate.component';

describe('AttenancedateComponent', () => {
  let component: AttenancedateComponent;
  let fixture: ComponentFixture<AttenancedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenancedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenancedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

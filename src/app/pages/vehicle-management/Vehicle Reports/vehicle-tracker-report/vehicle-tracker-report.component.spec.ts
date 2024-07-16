import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackerReportComponent } from './vehicle-tracker-report.component';

describe('VehicleTrackerReportComponent', () => {
  let component: VehicleTrackerReportComponent;
  let fixture: ComponentFixture<VehicleTrackerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrackerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrackerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

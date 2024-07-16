import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalReportComponent } from './rental-report.component';

describe('RentalReportComponent', () => {
  let component: RentalReportComponent;
  let fixture: ComponentFixture<RentalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

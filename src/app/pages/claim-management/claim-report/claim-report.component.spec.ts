import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimReportComponent } from './claim-report.component';

describe('ClaimReportComponent', () => {
  let component: ClaimReportComponent;
  let fixture: ComponentFixture<ClaimReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

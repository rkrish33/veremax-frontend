import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeClaimComponent } from './add-employee-claim.component';

describe('AddEmployeeClaimComponent', () => {
  let component: AddEmployeeClaimComponent;
  let fixture: ComponentFixture<AddEmployeeClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

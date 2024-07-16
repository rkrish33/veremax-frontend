import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeClaimAdmComponent } from './list-employee-claim-adm.component';

describe('ListEmployeeClaimAdmComponent', () => {
  let component: ListEmployeeClaimAdmComponent;
  let fixture: ComponentFixture<ListEmployeeClaimAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeClaimAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeClaimAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

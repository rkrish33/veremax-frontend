import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeClaimComponent } from './list-employee-claim.component';

describe('ListEmployeeClaimComponent', () => {
  let component: ListEmployeeClaimComponent;
  let fixture: ComponentFixture<ListEmployeeClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

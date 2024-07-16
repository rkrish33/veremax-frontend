import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseRoleComponent } from './add-expense-role.component';

describe('AddExpenseRoleComponent', () => {
  let component: AddExpenseRoleComponent;
  let fixture: ComponentFixture<AddExpenseRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

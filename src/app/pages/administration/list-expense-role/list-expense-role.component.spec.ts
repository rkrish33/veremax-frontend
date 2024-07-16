import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenseRoleComponent } from './list-expense-role.component';

describe('ListExpenseRoleComponent', () => {
  let component: ListExpenseRoleComponent;
  let fixture: ComponentFixture<ListExpenseRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpenseRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpenseRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

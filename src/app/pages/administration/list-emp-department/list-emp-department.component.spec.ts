import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpDepartmentComponent } from './list-emp-department.component';

describe('ListEmpDepartmentComponent', () => {
  let component: ListEmpDepartmentComponent;
  let fixture: ComponentFixture<ListEmpDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

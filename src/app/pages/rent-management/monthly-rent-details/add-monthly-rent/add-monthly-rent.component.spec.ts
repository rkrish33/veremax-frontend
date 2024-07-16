import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyRentComponent } from './add-monthly-rent.component';

describe('AddMonthlyRentComponent', () => {
  let component: AddMonthlyRentComponent;
  let fixture: ComponentFixture<AddMonthlyRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonthlyRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthlyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

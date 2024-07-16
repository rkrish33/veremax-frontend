import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonthlyRentComponent } from './list-monthly-rent.component';

describe('ListMonthlyRentComponent', () => {
  let component: ListMonthlyRentComponent;
  let fixture: ComponentFixture<ListMonthlyRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMonthlyRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonthlyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

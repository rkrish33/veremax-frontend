import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymenttermsComponent } from './list-paymentterms.component';

describe('ListPaymenttermsComponent', () => {
  let component: ListPaymenttermsComponent;
  let fixture: ComponentFixture<ListPaymenttermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaymenttermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymenttermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

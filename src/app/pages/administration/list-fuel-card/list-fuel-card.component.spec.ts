import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuelCardComponent } from './list-fuel-card.component';

describe('ListFuelCardComponent', () => {
  let component: ListFuelCardComponent;
  let fixture: ComponentFixture<ListFuelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFuelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFuelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

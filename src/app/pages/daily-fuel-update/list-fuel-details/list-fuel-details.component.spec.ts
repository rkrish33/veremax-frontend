import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuelDetailsComponent } from './list-fuel-details.component';

describe('ListFuelDetailsComponent', () => {
  let component: ListFuelDetailsComponent;
  let fixture: ComponentFixture<ListFuelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFuelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFuelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

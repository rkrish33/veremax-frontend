import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleServiceComponent } from './list-vehicle-service.component';

describe('ListVehicleServiceComponent', () => {
  let component: ListVehicleServiceComponent;
  let fixture: ComponentFixture<ListVehicleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehicleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

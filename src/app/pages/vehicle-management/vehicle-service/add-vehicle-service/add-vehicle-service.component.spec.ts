import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleServiceComponent } from './add-vehicle-service.component';

describe('AddVehicleServiceComponent', () => {
  let component: AddVehicleServiceComponent;
  let fixture: ComponentFixture<AddVehicleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

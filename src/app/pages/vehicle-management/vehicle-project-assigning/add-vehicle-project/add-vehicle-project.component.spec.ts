import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleProjectComponent } from './add-vehicle-project.component';

describe('AddVehicleProjectComponent', () => {
  let component: AddVehicleProjectComponent;
  let fixture: ComponentFixture<AddVehicleProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

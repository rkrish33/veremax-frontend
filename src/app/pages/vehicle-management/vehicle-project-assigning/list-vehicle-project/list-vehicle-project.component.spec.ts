import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleProjectComponent } from './list-vehicle-project.component';

describe('ListVehicleProjectComponent', () => {
  let component: ListVehicleProjectComponent;
  let fixture: ComponentFixture<ListVehicleProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehicleProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

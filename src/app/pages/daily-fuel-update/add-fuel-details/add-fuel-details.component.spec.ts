import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelDetailsComponent } from './add-fuel-details.component';

describe('AddFuelDetailsComponent', () => {
  let component: AddFuelDetailsComponent;
  let fixture: ComponentFixture<AddFuelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

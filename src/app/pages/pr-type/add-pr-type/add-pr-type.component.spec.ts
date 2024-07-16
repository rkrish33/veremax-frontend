import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrTypeComponent } from './add-pr-type.component';

describe('AddPrTypeComponent', () => {
  let component: AddPrTypeComponent;
  let fixture: ComponentFixture<AddPrTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

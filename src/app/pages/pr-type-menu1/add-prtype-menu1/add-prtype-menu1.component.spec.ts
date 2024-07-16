import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrtypeMenu1Component } from './add-prtype-menu1.component';

describe('AddPrtypeMenu1Component', () => {
  let component: AddPrtypeMenu1Component;
  let fixture: ComponentFixture<AddPrtypeMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrtypeMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrtypeMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

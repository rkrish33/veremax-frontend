import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrtypeMenu2Component } from './add-prtype-menu2.component';

describe('AddPrtypeMenu2Component', () => {
  let component: AddPrtypeMenu2Component;
  let fixture: ComponentFixture<AddPrtypeMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrtypeMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrtypeMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

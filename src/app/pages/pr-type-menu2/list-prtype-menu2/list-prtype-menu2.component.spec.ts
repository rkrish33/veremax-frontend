import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrtypeMenu2Component } from './list-prtype-menu2.component';

describe('ListPrtypeMenu2Component', () => {
  let component: ListPrtypeMenu2Component;
  let fixture: ComponentFixture<ListPrtypeMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrtypeMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrtypeMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

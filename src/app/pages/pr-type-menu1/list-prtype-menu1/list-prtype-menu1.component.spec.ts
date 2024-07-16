import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrtypeMenu1Component } from './list-prtype-menu1.component';

describe('ListPrtypeMenu1Component', () => {
  let component: ListPrtypeMenu1Component;
  let fixture: ComponentFixture<ListPrtypeMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrtypeMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrtypeMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

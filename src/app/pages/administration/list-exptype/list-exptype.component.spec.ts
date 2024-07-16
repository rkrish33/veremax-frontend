import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExptypeComponent } from './list-exptype.component';

describe('ListExptypeComponent', () => {
  let component: ListExptypeComponent;
  let fixture: ComponentFixture<ListExptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrentComponent } from './listrent.component';

describe('ListrentComponent', () => {
  let component: ListrentComponent;
  let fixture: ComponentFixture<ListrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

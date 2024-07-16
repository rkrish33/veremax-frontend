import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrTypeComponent } from './list-pr-type.component';

describe('ListPrTypeComponent', () => {
  let component: ListPrTypeComponent;
  let fixture: ComponentFixture<ListPrTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

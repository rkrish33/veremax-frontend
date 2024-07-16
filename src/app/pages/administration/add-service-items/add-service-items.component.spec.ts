import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceItemsComponent } from './add-service-items.component';

describe('AddServiceItemsComponent', () => {
  let component: AddServiceItemsComponent;
  let fixture: ComponentFixture<AddServiceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

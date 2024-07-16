import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceItemsComponent } from './list-service-items.component';

describe('ListServiceItemsComponent', () => {
  let component: ListServiceItemsComponent;
  let fixture: ComponentFixture<ListServiceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

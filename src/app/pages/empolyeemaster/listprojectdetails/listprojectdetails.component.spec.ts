import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectdetailsComponent } from './listprojectdetails.component';

describe('ListprojectdetailsComponent', () => {
  let component: ListprojectdetailsComponent;
  let fixture: ComponentFixture<ListprojectdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprojectdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

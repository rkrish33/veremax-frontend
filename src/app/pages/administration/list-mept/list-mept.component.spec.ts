import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeptComponent } from './list-mept.component';

describe('ListMeptComponent', () => {
  let component: ListMeptComponent;
  let fixture: ComponentFixture<ListMeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

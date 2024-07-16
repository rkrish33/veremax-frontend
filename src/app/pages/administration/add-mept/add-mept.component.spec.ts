import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeptComponent } from './add-mept.component';

describe('AddMeptComponent', () => {
  let component: AddMeptComponent;
  let fixture: ComponentFixture<AddMeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

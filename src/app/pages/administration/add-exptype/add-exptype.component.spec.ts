import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExptypeComponent } from './add-exptype.component';

describe('AddExptypeComponent', () => {
  let component: AddExptypeComponent;
  let fixture: ComponentFixture<AddExptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

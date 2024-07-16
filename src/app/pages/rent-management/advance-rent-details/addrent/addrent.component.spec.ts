import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrentComponent } from './addrent.component';

describe('AddrentComponent', () => {
  let component: AddrentComponent;
  let fixture: ComponentFixture<AddrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

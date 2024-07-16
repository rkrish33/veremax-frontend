import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicecatComponent } from './add-servicecat.component';

describe('AddServicecatComponent', () => {
  let component: AddServicecatComponent;
  let fixture: ComponentFixture<AddServicecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

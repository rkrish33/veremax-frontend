import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminstrationComponent } from './addadminstration.component';

describe('AddadminstrationComponent', () => {
  let component: AddadminstrationComponent;
  let fixture: ComponentFixture<AddadminstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadminstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeetypeComponent } from './add-employeetype.component';

describe('AddEmployeetypeComponent', () => {
  let component: AddEmployeetypeComponent;
  let fixture: ComponentFixture<AddEmployeetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

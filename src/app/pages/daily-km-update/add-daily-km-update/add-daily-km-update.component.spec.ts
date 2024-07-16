import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyKmUpdateComponent } from './add-daily-km-update.component';

describe('AddDailyKmUpdateComponent', () => {
  let component: AddDailyKmUpdateComponent;
  let fixture: ComponentFixture<AddDailyKmUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyKmUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyKmUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

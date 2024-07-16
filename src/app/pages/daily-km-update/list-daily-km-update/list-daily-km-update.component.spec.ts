import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDailyKmUpdateComponent } from './list-daily-km-update.component';

describe('ListDailyKmUpdateComponent', () => {
  let component: ListDailyKmUpdateComponent;
  let fixture: ComponentFixture<ListDailyKmUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDailyKmUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDailyKmUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

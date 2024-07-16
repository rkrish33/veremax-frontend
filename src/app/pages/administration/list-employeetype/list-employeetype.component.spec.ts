import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeetypeComponent } from './list-employeetype.component';

describe('ListEmployeetypeComponent', () => {
  let component: ListEmployeetypeComponent;
  let fixture: ComponentFixture<ListEmployeetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

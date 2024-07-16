import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListempolyeeComponent } from './listempolyee.component';

describe('ListempolyeeComponent', () => {
  let component: ListempolyeeComponent;
  let fixture: ComponentFixture<ListempolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListempolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListempolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

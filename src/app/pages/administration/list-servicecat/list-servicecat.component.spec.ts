import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicecatComponent } from './list-servicecat.component';

describe('ListServicecatComponent', () => {
  let component: ListServicecatComponent;
  let fixture: ComponentFixture<ListServicecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

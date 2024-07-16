import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminstrationComponent } from './listadminstration.component';

describe('ListadminstrationComponent', () => {
  let component: ListadminstrationComponent;
  let fixture: ComponentFixture<ListadminstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadminstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

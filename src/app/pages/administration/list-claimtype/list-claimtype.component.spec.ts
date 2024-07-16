import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClaimtypeComponent } from './list-claimtype.component';

describe('ListClaimtypeComponent', () => {
  let component: ListClaimtypeComponent;
  let fixture: ComponentFixture<ListClaimtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClaimtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClaimtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

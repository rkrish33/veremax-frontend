import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLeveldetailsComponent } from './project-leveldetails.component';

describe('ProjectLeveldetailsComponent', () => {
  let component: ProjectLeveldetailsComponent;
  let fixture: ComponentFixture<ProjectLeveldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLeveldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLeveldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

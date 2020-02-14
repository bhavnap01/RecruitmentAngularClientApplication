import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectDetailsComponent } from './update-project-details.component';

describe('UpdateProjectDetailsComponent', () => {
  let component: UpdateProjectDetailsComponent;
  let fixture: ComponentFixture<UpdateProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

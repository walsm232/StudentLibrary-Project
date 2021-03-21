import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitingComponent } from './citing.component';

describe('CitingComponent', () => {
  let component: CitingComponent;
  let fixture: ComponentFixture<CitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

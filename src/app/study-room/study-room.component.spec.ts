import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRoomComponent } from './study-room.component';

describe('StudyRoomComponent', () => {
  let component: StudyRoomComponent;
  let fixture: ComponentFixture<StudyRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

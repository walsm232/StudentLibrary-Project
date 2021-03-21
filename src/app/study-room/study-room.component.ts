import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
// import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@Component({
  selector: 'app-study-room',
  templateUrl: './study-room.component.html',
  styleUrls: ['./study-room.component.css'],
})
export class StudyRoomComponent implements OnInit {

  constructor( private router : Router) { }

  roomSearchButtonClicked : boolean = false;
  roomPicked: boolean=false;
  dateSelected: boolean = false;
  headers = [ 
     'time','Glasnevin Room 1',  'Glasnevin Room 2',  'Glasnevin Room 3',  'Glasnevin Room 4'
  ]

timetable = [

  {
    time: '08:00', room1: 'green', room2: 'red' , room3 : 'red', room4: 'green'
  },
  {
    time: '09:00', room1: 'red', room2: 'red' , room3 : 'red', room4: 'red'
  },
  {
    time: '10:00', room1: 'red', room2: 'green' , room3 : 'red', room4: 'red'
  },
  {
    time: '11:00', room1: 'green', room2: 'red' , room3 : 'green', room4: 'green'
  },
  {
    time: '12:00', room1: 'red', room2: 'red' , room3 : 'red', room4: 'red'
  },
  {
    time: '13:00', room1: 'red', room2: 'green' , room3 : 'red', room4: 'red'
  },
  {
    time: '14:00', room1: 'green', room2: 'red' , room3 : 'green', room4: 'green'
  },
  {
    time: '15:00', room1: 'red', room2: 'red' , room3 : 'red', room4: 'red'
  },
  {
    time: '16:00', room1: 'red', room2: 'green' , room3 : 'red', room4: 'red'
  },
  {
    time: '17:00', room1: 'green', room2: 'red' , room3 : 'green', room4: 'green'
  },
  {
    time: '18:00', room1: 'red', room2: 'red' , room3 : 'red', room4: 'red'
  }


]
  ngOnInit() {
    console.log('time', this.timetable[0]);
    
  }

  goHome() {
    this.router.navigate([''])
  }

  roomSearched() {
    this.roomSearchButtonClicked = !this.roomSearchButtonClicked
  }
  roomChosen(){
    this.roomPicked = !this.roomPicked
    this.roomSearchButtonClicked = false
    
  }

  calendar() {
    console.log('jshssssssssss')
    this.dateSelected = true
  }
}

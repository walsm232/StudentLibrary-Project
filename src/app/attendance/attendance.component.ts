import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor() { }
randomNumber: any;
groundFloor: any;
firstFloor: any;
secondFloor: any;
  ngOnInit() {
this.randomNumber = Math.floor(Math.random() * 91)
this.floorPercentages()
  }
  
floorPercentages() {
this.groundFloor = (this.randomNumber * .3).toFixed(1)
this.firstFloor = (this.randomNumber * .6).toFixed(1)
this.secondFloor = (this.randomNumber * .1).toFixed(1)
}
}

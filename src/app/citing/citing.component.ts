import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citing',
  templateUrl: './citing.component.html',
  styleUrls: ['./citing.component.css']
})
export class CitingComponent implements OnInit {

  clicked: boolean = false
  constructor() { }

  ngOnInit() {
  }

  acessibbility() {
    this.clicked = !this.clicked
  }
}

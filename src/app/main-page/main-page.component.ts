import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WizardService } from '../wizard.service'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,
    private wizardService: WizardService) { }

  inputBook: string;
  clicked: boolean=false
  ngOnInit() {
  }

  // this is an example of a routing function, 
  // check main-page.component.html to see how it is activated (look for "goToStudy()")
  goToStudy(){
    this.router.navigate(['app-study-room'])    
  }
  
  goToAttendance(){
    this.router.navigate(['app-attendance'])
  }

  goToCiting(){
    this.router.navigate(['app-citing'])
  }

  searchBook(){
    this.wizardService.inputedBook  = this.inputBook 
    console.log('here', this.wizardService.inputedBook);  
    this.router.navigate(['app-search'])
  }

  acessibbility() {
    this.clicked = !this.clicked
  }


}

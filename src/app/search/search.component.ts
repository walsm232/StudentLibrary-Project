import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private wizardService: WizardService,
    private router : Router ) { }
reserveHit: boolean = false;
inputtedBook: any;

bookBoolean: boolean=false;


books = [
  {title: "About Face", author: "Alan Cooper", reservations:"6", available: "2"},
  {title: "Designing Interfaces", author: "Jenifer Tidwell", reservations:"9", available: "3"},
  {title: "Don't Make Me Think", author: "Steve Krug", reservations:"2", available: "4"},
  {title: "UI is Communication", author: "Everett N. McKay", reservations:"14", available: "1"},
  {title: "The Humane Interface", author: "Jef Raskin", reservations:"10", available: "2"},
  {title: "User Interface Design for Programmers", author: "Joel Spolsky", reservations:"15", available: "1"},
  {title: "The Best Interface Is No Interface", author: "Golden Krishnaf", reservations:"2", available: "3"},
  {title: "100 Things Every Designer Needs to Know About People", author: "Susan Weinschenk", reservations:"1", available: "3"},
  {title: "Mobile Design Pattern Gallery", author: "Theresa Neil", reservations:"1", available: "4"}
]

ngOnInit() {
  console.log('this is the value', this.wizardService.inputedBook);
  this.inputtedBook = this.wizardService.inputedBook;
  this.checkForBook()
}

  showReserve(){
    this.reserveHit = true;
  }

  
  checkForBook(){
    this.inputtedBook
    for (let i = 0; i < this.books.length; i++) {
      if ( this.inputtedBook == this.books[i].title)  {
        this.bookBoolean = true
      }   
      console.log('boolean', this.bookBoolean);
 
    }    
  }

    goHome() {
      this.router.navigate([""])
    }
}

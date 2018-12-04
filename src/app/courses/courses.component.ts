import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { RouterModule, Router } from '@angular/router';
import { CardModel } from '../card.model';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.filterItem('');
  }
  filteredItems: CardModel[] = null;

filterItem(input) {
  if(input ==null || input == undefined) {
    this.filteredItems = this.dataService.courses;
  }
  else {
    this.filteredItems = [];
    this.filteredItems = this.dataService.courses.filter(CardModel => 
      CardModel.cardtitle.toLowerCase().includes(input.toLowerCase())
      );
  }
}
snack(){debugger;
  
  this.dataService.openSnackBar('Please Login to like this course', 'Login/Signup');
}
}

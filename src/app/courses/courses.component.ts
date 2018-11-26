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
clickvideo(video){
  if(this.dataService.userLoggedIn == true){
this.dataService.clickedCourse = video;
this.router.navigateByUrl('videos');}
else {
this.dataService.openSnackBar('Please login to check the courses', 'Click Log In/Sign Up');
}
}
filterItem(input) {debugger;
  if(input ==null || input == undefined) {
    this.filteredItems = this.dataService.courses;
  }
  else {
    this.filteredItems = [];
this.filteredItems = this.dataService.courses.filter(CardModel => CardModel.cardtitle.includes(input));
debugger;
console.log(this.filteredItems);
  }
}

}

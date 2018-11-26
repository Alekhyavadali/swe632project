import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { RouterModule, Router } from '@angular/router';
import { CardModel } from '../card.model';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.filterItem('');
  }
  filteredItems: CardModel[] = null;
clickvideo(video){
this.dataService.clickedCourse = video;
this.router.navigateByUrl('videos');
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

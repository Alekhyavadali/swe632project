import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
  }
clickvideo(video){
this.dataService.clickedCourse = video;
this.router.navigateByUrl('videos');
}
}

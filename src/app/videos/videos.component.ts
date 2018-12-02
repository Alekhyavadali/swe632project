import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import { CardModel } from '../card.model';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
 course: CardModel;
 id = null;
 link = null;
 startLink = null;
 clicked = false;
  constructor(private dataService: DataService) { 
this.course = this.dataService.clickedCourse;
  }

  ngOnInit() {

  }
videoLink(video) {
  this.id = video.id;
  if(this.id != 1 && this.dataService.userLoggedIn != true){
    this.dataService.openSnackBar('Please login to check the courses', 'Log In/Sign Up');
  }else{
    this.link = video.link;
    this.clicked =true;
  }  
}
}

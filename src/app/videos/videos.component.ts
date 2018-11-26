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
 link = null;
 clicked = false;
  constructor(private dataService: DataService) { 
this.course = this.dataService.clickedCourse;
  }

  ngOnInit() {

  }
videoLink(video) {debugger;
  this.link = video;
  this.clicked =true;
}
}

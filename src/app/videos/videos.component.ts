import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import { CardModel } from '../card.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
 course: CardModel;
 id = null;
 link = null;
 clicked = false;
  constructor(private dataService: DataService, private route:ActivatedRoute, private router: Router ) { 
    this.route.queryParams.subscribe(params =>{debugger;
      this.course= JSON.parse(params.course);
    });
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
clickback(){
  this.router.navigateByUrl('courses');
}
}

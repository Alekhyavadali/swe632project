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
    this.route.queryParams.subscribe(params =>{
      this.course= JSON.parse(params.course);
      this.link = this.course.videos['0'].link;
      this.course.videos['0'].playing =true;
    });
  }

  ngOnInit() {
  }

videoLink(video) {
 for(let i=0; i< this.course.videos.length; i++){
   this.course.videos[i].playing =false;
 }
  video.playing = true;
  this.dataService.playingVideoname = video.video;
  this.id = video.id;
  if(this.id != 1 && this.dataService.userLoggedIn != true){
    this.dataService.openSnackBar('Please login to watch the videos', 'Log In/Sign Up');
  }else{
    this.link = video.link;
    this.clicked =true;
  }  
}
/*clickback(){
  this.router.navigateByUrl('courses');
}
start(){
  this.link = this.course.videos['0'].link;
  this.clicked =true;
  console.log(this.link);
}*/
getColor(id, videoname) {
  if(videoname.playing ==true)
  return "blue";

}
submit(){
  this.dataService.openSnackBar('Successfully saved', 'Course completed');
}
}

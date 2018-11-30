import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
url: String ;
reader = new FileReader();;
target:EventTarget;
  ngOnInit() {
  }
savePhoto(input) {
  debugger;
}
}

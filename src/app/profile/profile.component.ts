import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
url: String ;
  ngOnInit() {
  }
savePhoto(input) {
  debugger;
}
onSelectFile(event) { // called each time file input changes
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      debugger;
      this.url = event.target.result;
    }
  }
}
}

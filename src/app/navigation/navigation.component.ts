import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private dataservice: DataService,private router: Router) { }

  ngOnInit() {
  }
  clicksign(){
    this.router.navigateByUrl('login')
  }
  clickcourse(){
    this.router.navigateByUrl('courses')
  }
  clickHome(){
    this.router.navigateByUrl('')
  }
  clickLogOut(){
    this.dataservice.userLoggedIn = false;
    this.router.navigateByUrl('');
  }
  clickProfile(){
    this.router.navigateByUrl('profile');
  }
  clickAboutUs(){
    this.router.navigateByUrl('aboutus');
  }
}

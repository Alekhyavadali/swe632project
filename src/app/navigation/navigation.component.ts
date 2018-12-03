import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { VERSION, MatMenuTrigger } from '@angular/material';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private dataservice: DataService,private router: Router) { }
  @ViewChild(MatMenuTrigger) menu2Trigger: MatMenuTrigger;
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
  clickReport(){
    if(this.dataservice.userLoggedIn == false) {
      this.dataservice.openSnackBar('Please Sign Up/Login', 'Sign Up/Log in')
    }
    else 
    this.dataservice.openSnackBar('Please complete the course to check the Report Card', '')
  }
  closeMenu(){
    this.menu2Trigger.closeMenu();
  }
}

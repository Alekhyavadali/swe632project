import { Component, OnInit } from '@angular/core';
import { User } from './login.model';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private dataservice: DataService, private router: Router) { }
 userList: User[] = [
{
  username: 'John',
  password: 'john123'
}
];
  ngOnInit() {
  }
submit(inputdata) {
  for ( let i = 0; i < this.userList.length; i++) {
    if ((this.userList[i].username === inputdata.username) && (this.userList[i].password === inputdata.password)) {
      this.dataservice.userLoggedIn = true;
      this.router.navigate(['mainpage']);
    }
  }
}
}

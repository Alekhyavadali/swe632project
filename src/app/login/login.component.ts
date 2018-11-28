import { Component, OnInit } from '@angular/core';
import { User } from './login.model';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private dataservice: DataService, private router: Router, public snackBar: MatSnackBar) { }
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
      this.dataservice.username = this.userList[i].username;
      this.router.navigateByUrl('');
    }
    else {
      this.dataservice.openSnackBar('passwords or username incorrect', 'Check again');
    }
  }
}
submitsignup(inputdata) {debugger;
if(inputdata.password1 === inputdata.password2) {
  this.userList.push(
    {username : inputdata.username1,
      password: inputdata.password1
    }
  );
  this.dataservice.username = inputdata.username1;
  this.dataservice.userLoggedIn = true;
  this.router.navigateByUrl('courses')
}
else {
  this.dataservice.openSnackBar('passwords should match', 'Password');
}
}

}

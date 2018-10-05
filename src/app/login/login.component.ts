import { Component, OnInit } from '@angular/core';
import { User } from './login.model';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor() { }
// username: string;
// password: string;
 userList: User[] = [
{
  username: 'John',
  password: 'john123'
}
]
  ngOnInit() {
  }
submit(inputdata) {
  for( let i=0; i< this.userList.length; i++){
    if((this.userList[i].username === inputdata.username) && (this.userList[i].password === inputdata.password)){
      console.log('logged in',this.userList[i].username  );
    }
  }
}
}

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
constructor(private dataservice: DataService) {

}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isDarkTheme: boolean = false;
  changeTheme(): void {
    if (this.isDarkTheme) {
      
       this.isDarkTheme = false;
       console.log(this.isDarkTheme);
    } else {
       this.isDarkTheme = true;
       console.log(this.isDarkTheme);
    }
  }
}

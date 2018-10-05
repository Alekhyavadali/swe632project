import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userLoggedIn: boolean = false;
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

import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable()

export class navigateRouteActivator implements CanActivate {
    constructor(private dataservice: DataService, private router: Router) {

    }
    canActivate() {
       if(this.dataservice.userLoggedIn == false) {
           console.log('wrong username or password')
       }
       return this.dataservice.userLoggedIn;
    }
}
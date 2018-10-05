import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from 'src/app/login/login.component';
import { navigateRouteActivator } from './navigation/navigate-route-activator.service';
// Routes data structure
const routes: Routes = [
    {
        path:'mainpage',
        component:MainpageComponent,
        canActivate: [navigateRouteActivator]
    },
    {
        path:'',
        component:LoginComponent
    },

];
// Module Decorator
@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRouting{ }
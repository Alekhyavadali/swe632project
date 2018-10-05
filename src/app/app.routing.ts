import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from 'src/app/login/login.component';
// Routes data structure
const routes: Routes = [
    {
        path:'',
        component:MainpageComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
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
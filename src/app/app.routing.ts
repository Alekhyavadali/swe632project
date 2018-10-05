import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
// Routes data structure
const routes: Routes = [
    {
        path:'',
        component:MainpageComponent
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
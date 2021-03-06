import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from 'src/app/login/login.component';
import { navigateRouteActivator } from './navigation/navigate-route-activator.service';
import { CoursesComponent } from './courses/courses.component';
import { VideosComponent } from './videos/videos.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
// Routes data structure
const routes: Routes = [
    {
        path: '',
        component: MainpageComponent,
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
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
  export class AppRouting { }

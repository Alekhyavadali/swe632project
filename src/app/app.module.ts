import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRouting} from './app.routing';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material elements
import {MatToolbarModule,
   MatButtonModule,
   MatSidenavModule, MatIconModule,
    MatChipsModule, MatAutocompleteModule, MatFormFieldModule,
     MatInputModule, MatSelectModule, MatListModule, MatMenuModule,
      MatCardModule, MatGridListModule, MatExpansionModule, MatSnackBarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { navigateRouteActivator } from './navigation/navigate-route-activator.service';
import { CoursesComponent } from './courses/courses.component';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavigationComponent,
    LoginComponent,
    CoursesComponent,
    VideosComponent,
    SafePipe,
    FooterComponent,
    ProfileComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    // Material
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [DataService, navigateRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }

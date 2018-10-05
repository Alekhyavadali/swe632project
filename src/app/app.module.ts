import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRouting} from './app.routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material elements
import {MatToolbarModule,
   MatButtonModule,
   MatSidenavModule, MatIconModule,
    MatChipsModule, MatAutocompleteModule, MatFormFieldModule,
     MatInputModule, MatSelectModule, MatListModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { navigateRouteActivator } from './navigation/navigate-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [DataService, navigateRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }

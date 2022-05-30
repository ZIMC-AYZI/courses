import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { RegistrationPageComponent } from './core/pages/registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetControlModule } from './core/pipes/get-control/get-control.module';
import { MatButtonModule } from '@angular/material/button';
import {InputModule} from "./core/components/input/input.module";
import { HistoryComponent } from './core/pages/history/history.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    ReactiveFormsModule,
    GetControlModule,
    MatButtonModule,
    InputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

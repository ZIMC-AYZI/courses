import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './core/pages/registration-page/registration-page.component';
import { appRoutes } from './core/constants/routes';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import {HistoryComponent} from "./core/pages/history/history.component";

const routes: Routes = [
  {
    path: appRoutes.login.routerPath,
    component: LoginPageComponent
  },
  {
    path: appRoutes.registration.routerPath,
    component: RegistrationPageComponent
  },
  {
    path: appRoutes.homePage.routerPath,
    component: HomePageComponent
  },  {
    path: appRoutes.history.routerPath,
    component: HistoryComponent
  },
  {
    path: '**',
    redirectTo: appRoutes.login.routerPath
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

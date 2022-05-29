import { Component, OnInit } from '@angular/core';
import { appRoutes } from './core/constants/routes';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navBarItems: any = [];

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe((event: any) => {

        if (localStorage.getItem('session')) {
          this.navBarItems = [
            {
              title: 'Login',
              url: appRoutes.login.routerPath,
              active: !!this.router.url.match(appRoutes.login.routerPath)
            },
            {
              title: 'Registration',
              url: appRoutes.registration.routerPath,
              active: !!this.router.url.match(appRoutes.registration.routerPath)
            },
            {
              title: 'Home Page',
              url: appRoutes.homePage.routerPath,
              active: !!this.router.url.match(appRoutes.homePage.routerPath)
            }
          ]
        } else {
          this.navBarItems = [
            {
              title: 'Login',
              url: appRoutes.login.routerPath,
              active: !!this.router.url.match(appRoutes.login.routerPath)
            },
            {
              title: 'Registration',
              url: appRoutes.registration.routerPath,
              active: !!this.router.url.match(appRoutes.registration.routerPath)
            }
          ]
        }
      });
  }
}

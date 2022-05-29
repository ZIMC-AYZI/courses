import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from '../../constants/routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user!: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('session') as string);
  }

  logOut() {
    localStorage.removeItem('session');
    this.router.navigate([appRoutes.login.routerPath]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { userEmailReg } from '../../constants/reg-exp-validators';
import { Router } from '@angular/router';
import { appRoutes } from '../../constants/routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public emailControl!: FormControl;
  public passwordControl!: FormControl;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.emailControl = new FormControl('', [Validators.pattern(userEmailReg)]);
    this.passwordControl = new FormControl('', [Validators.required]);
  }

  public login(): void {
    const user = localStorage.getItem(this.emailControl.value);
    if (user) {
      const userPassword = JSON.parse(user).password;

      if (this.passwordControl.value === userPassword) {
        localStorage.setItem('session', user);
        this.router.navigate([appRoutes.homePage.routerPath]);
      } else {
        console.log('password incorrect')
      }
    }
  }
}

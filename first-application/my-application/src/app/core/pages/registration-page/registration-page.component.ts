import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userEmailReg, userNameReg } from '../../constants/reg-exp-validators';
import { Router } from '@angular/router';
import { appRoutes } from '../../constants/routes';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public registrationForm!: FormGroup;
  public keys = Object.keys;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeFormGroup();
  }

  private initializeFormGroup(): void {
    this.registrationForm = this.fb.group({
      name: new FormControl('', [Validators.pattern(userNameReg)]),
      surname: new FormControl('', [Validators.pattern(userNameReg)]),
      email: new FormControl('', [Validators.pattern(userEmailReg)]),
      password: new FormControl('', [Validators.required])
    })
  };

  public registration(): void {
    const newUser = this.registrationForm.value;

    localStorage.setItem(newUser.email, JSON.stringify(newUser));
    this.router.navigate([appRoutes.login.routerPath]);
  }
}

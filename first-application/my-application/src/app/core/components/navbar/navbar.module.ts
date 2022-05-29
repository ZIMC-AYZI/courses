import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppBaseTabsModule } from '../app-base-tabs/app-base-tabs.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppBaseTabsModule
  ]
})
export class NavbarModule { }

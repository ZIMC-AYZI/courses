import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITabs } from '../../interfaces/i-tabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() data!: any;
  @Input() hidePanel = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onChangeTab(tab: ITabs): void {
    console.log(tab, 'event')
    this.router.navigate([tab.url]);
  }
}

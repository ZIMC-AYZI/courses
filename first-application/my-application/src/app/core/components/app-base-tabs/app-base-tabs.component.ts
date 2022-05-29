import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITabs } from '../../interfaces/i-tabs';

@Component({
  selector: 'app-base-tabs',
  templateUrl: './app-base-tabs.component.html',
  styleUrls: ['./app-base-tabs.component.scss']
})
export class AppBaseTabsComponent implements OnInit {
  @Input() tabs!: ITabs[];
  @Output() currentTab: EventEmitter<ITabs> = new EventEmitter<ITabs>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectTab(tab: ITabs): void {
    this.tabs.map(el => el.active = el === tab);
    this.currentTab.emit(tab);
  }

}

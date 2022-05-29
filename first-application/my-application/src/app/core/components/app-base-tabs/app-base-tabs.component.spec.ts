import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaseTabsComponent } from './app-base-tabs.component';

describe('TreatmentTabsComponent', () => {
  let component: AppBaseTabsComponent;
  let fixture: ComponentFixture<AppBaseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBaseTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBaseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

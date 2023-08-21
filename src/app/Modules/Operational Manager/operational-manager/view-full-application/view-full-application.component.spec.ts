import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullApplicationComponent } from './view-full-application.component';

describe('ViewFullApplicationComponent', () => {
  let component: ViewFullApplicationComponent;
  let fixture: ComponentFixture<ViewFullApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFullApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFullApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

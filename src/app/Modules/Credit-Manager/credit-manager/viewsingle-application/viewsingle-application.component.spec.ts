import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleApplicationComponent } from './viewsingle-application.component';

describe('ViewsingleApplicationComponent', () => {
  let component: ViewsingleApplicationComponent;
  let fixture: ComponentFixture<ViewsingleApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsingleApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsingleApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

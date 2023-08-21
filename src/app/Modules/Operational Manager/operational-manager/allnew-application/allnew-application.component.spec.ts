import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnewApplicationComponent } from './allnew-application.component';

describe('AllnewApplicationComponent', () => {
  let component: AllnewApplicationComponent;
  let fixture: ComponentFixture<AllnewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllnewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllnewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

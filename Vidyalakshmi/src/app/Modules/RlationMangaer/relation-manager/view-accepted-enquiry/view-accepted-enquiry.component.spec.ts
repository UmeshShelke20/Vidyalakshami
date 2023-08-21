import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedEnquiryComponent } from './view-accepted-enquiry.component';

describe('ViewAcceptedEnquiryComponent', () => {
  let component: ViewAcceptedEnquiryComponent;
  let fixture: ComponentFixture<ViewAcceptedEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

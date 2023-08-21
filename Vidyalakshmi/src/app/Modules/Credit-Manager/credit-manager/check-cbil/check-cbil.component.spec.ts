import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCBILComponent } from './check-cbil.component';

describe('CheckCBILComponent', () => {
  let component: CheckCBILComponent;
  let fixture: ComponentFixture<CheckCBILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCBILComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCBILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

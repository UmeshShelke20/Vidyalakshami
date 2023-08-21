import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSanctionApplicationComponent } from './all-sanction-application.component';

describe('AllSanctionApplicationComponent', () => {
  let component: AllSanctionApplicationComponent;
  let fixture: ComponentFixture<AllSanctionApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSanctionApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSanctionApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

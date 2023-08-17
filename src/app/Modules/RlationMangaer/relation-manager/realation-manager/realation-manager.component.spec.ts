import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealationManagerComponent } from './realation-manager.component';

describe('RealationManagerComponent', () => {
  let component: RealationManagerComponent;
  let fixture: ComponentFixture<RealationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

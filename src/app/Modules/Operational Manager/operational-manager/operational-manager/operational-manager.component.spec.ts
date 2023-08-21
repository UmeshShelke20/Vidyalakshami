import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalManagerComponent } from './operational-manager.component';

describe('OperationalManagerComponent', () => {
  let component: OperationalManagerComponent;
  let fixture: ComponentFixture<OperationalManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

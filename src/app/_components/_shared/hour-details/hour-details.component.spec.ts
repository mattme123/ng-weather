import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourDetailsComponent } from './hour-details.component';

describe('HourDetailsComponent', () => {
  let component: HourDetailsComponent;
  let fixture: ComponentFixture<HourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

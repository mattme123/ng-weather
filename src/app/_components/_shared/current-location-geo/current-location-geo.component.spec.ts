import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLocationGeoComponent } from './current-location-geo.component';

describe('CurrentLocationGeoComponent', () => {
  let component: CurrentLocationGeoComponent;
  let fixture: ComponentFixture<CurrentLocationGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLocationGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLocationGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

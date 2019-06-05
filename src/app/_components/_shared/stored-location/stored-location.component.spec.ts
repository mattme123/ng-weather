import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredLocationComponent } from './stored-location.component';

describe('StoredLocationComponent', () => {
  let component: StoredLocationComponent;
  let fixture: ComponentFixture<StoredLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

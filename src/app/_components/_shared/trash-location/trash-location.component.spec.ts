import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashLocationComponent } from './trash-location.component';

describe('TrashLocationComponent', () => {
  let component: TrashLocationComponent;
  let fixture: ComponentFixture<TrashLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

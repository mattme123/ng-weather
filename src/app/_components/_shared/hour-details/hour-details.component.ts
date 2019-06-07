import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { Ihour } from 'src/app/ihour';

@Component({
  selector: 'weather-hour-details',
  templateUrl: './hour-details.component.html',
  styleUrls: ['./hour-details.component.scss']
})
export class HourDetailsComponent implements OnInit {
  @Input() time: number;
  @Input() temp: number;
  constructor() { }
  ngOnInit() {

  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'weather-hour-details',
  templateUrl: './hour-details.component.html',
  styleUrls: ['./hour-details.component.scss']
})
export class HourDetailsComponent implements OnInit, OnChanges {
  @Input() time: number;
  @Input() temp: number;
  @Input() sufix: number;
  constructor() { }
  ngOnInit() {
    if (this.time === 14) {
      this.time = 12;
    } else if (this.time === 20) {
      this.time = 8;
    }
  }

  ngOnChanges() {
    if (this.time === 14) {
      this.time = 12;
    } else if (this.time === 20) {
      this.time = 8;
    }
  }

}

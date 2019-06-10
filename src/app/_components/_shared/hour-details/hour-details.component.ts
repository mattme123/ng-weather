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
  @Input() summary: string;
  @Input() clouds: number;
  constructor() { }
  ngOnInit() {
    if (this.time === 14) {
      this.time = 12;
    } else if (this.time === 20) {
      this.time = 8;
    }
  }

  ngOnChanges() {
    console.log(this.clouds);
    const img = document.getElementById('img');
    img.className = 'sunny';
    if (this.time === 14) {
      this.time = 12;
    } else if (this.time === 20) {
      this.time = 8;
    }
    /* if (this.summary === 'rain') {
      img.className = 'rain';
    } else if (this.summary === 'snow') {
      img.className = 'snow';
    } else if (this.summary === 'clouds') {
      img.className = 'clouds';
    } else if (this.clouds > 70) {
      img.className = 'mostly-cloudy';
    } else if (this.clouds > 30) {
      img.className = 'partly-cloudy';
    } else if (this.clouds < 27) {
      console.log('sun');
      img.className = 'sunny';
    } */
  }

}

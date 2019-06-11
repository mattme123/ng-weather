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
      this.time = 2;
    } else if (this.time === 20) {
      this.time = 8;
    }
  }

  ngOnChanges() {
    const img = document.getElementsByClassName('img');
    /*    img[0].className = 'img sunny';
       img[1].className = 'img sunny';
       img[2].className = 'img sunny'; */
    if (this.time === 14) {
      this.time = 2;
    } else if (this.time === 20) {
      this.time = 8;
    }

    if (this.summary === 'rain') {
      setIcons('rain');
    } else if (this.summary === 'snow') {
      setIcons('snow');
    } else if (this.summary === 'clouds') {
      setIcons('clouds');
    } else if (this.summary === 'mist') {
      setIcons('mist');
    } else if (this.clouds > 70) {
      setIcons('mostly-cloudy');
    } else if (this.clouds > 30) {
      setIcons('partly-cloudy');
    } else {
      setIcons('sunny');
    }

    function setIcons(condition: string) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < img.length; i++) {
        img[i].className = `img ${condition}`;
      }
    }
  }

}

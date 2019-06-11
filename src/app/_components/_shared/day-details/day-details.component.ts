import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements OnInit {
  eight: any;
  twelve: any;
  pm: any;
  loaded1 = false;
  loaded2 = false;
  loaded3 = false;
  day1L = 1000;
  day1H = 0;
  day2L = 1000;
  day2H = 0;
  day3L = 1000;
  day3H = 0;
  day4L = 1000;
  day4H = 0;
  high: number;
  low: number;
  location;
  a: string;
  p: string;
  constructor(private location$: LocationService) {
    this.a = 'am';
    this.p = 'pm';
  }

  ngOnInit() {
    this.location$.$selectedLocation
      .subscribe(
        res => {
          this.location = res;
          this.resetHighAndLow();
          for (let i = 0; i < this.location.forcast.length; i++) {
            if (i < 8 && this.location.forcast[i].tempMax > this.day1H) {
              this.day1H = this.location.forcast[i].tempMax;
            } else if (i > 7 && i < 16 && this.location.forcast[i].tempMax > this.day2H) {
              this.day2H = this.location.forcast[i].tempMax;
            } else if (i > 15 && i < 24 && this.location.forcast[i].tempMax > this.day3H) {
              this.day3H = this.location.forcast[i].tempMax;
            } else if (i > 23 && this.location.forcast[i].tempMax > this.day4H) {
              this.day4H = this.location.forcast[i].tempMax;
            }
            if (i < 8 && this.location.forcast[i].tempMin < this.day1L) {
              this.day1L = this.location.forcast[i].tempMin;
            } else if (i > 7 && i < 16 && this.location.forcast[i].tempMin < this.day2L) {
              this.day2L = this.location.forcast[i].tempMin;
            } else if (i > 15 && i < 24 && this.location.forcast[i].tempMin < this.day3L) {
              this.day3L = this.location.forcast[i].tempMin;
            } else if (i > 23 && this.location.forcast[i].tempMin < this.day4L) {
              this.day4L = this.location.forcast[i].tempMin;
            }
          }
          setTimeout(() => {
            this.next();
          }, 300);
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );
  }

  next() {
    this.location$.$eightHour
      .subscribe(
        res => {
          this.eight = this.location.forcast[res];
          if (res === 2) {
            this.high = this.day1H;
            this.low = this.day1L;
          } else if (res === 10) {
            this.high = this.day2H;
            this.low = this.day2L;
          } else if (res === 18) {
            this.high = this.day3H;
            this.low = this.day3L;
          } else if (res === 26) {
            this.high = this.day4H;
            this.low = this.day4L;
          }
          this.loaded1 = true;
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );
    this.location$.$twelveHour
      .subscribe(
        res => {
          this.twelve = this.location.forcast[res];
          this.loaded2 = true;
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );

    this.location$.$pmHour
      .subscribe(
        res => {
          this.pm = this.location.forcast[res];
          this.loaded3 = true;
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );


  }
  resetHighAndLow() {
    this.day1L = 1000;
    this.day1H = 0;
    this.day2L = 1000;
    this.day2H = 0;
    this.day3L = 1000;
    this.day3H = 0;
    this.day4L = 1000;
    this.day4H = 0;
    this.high = 0;
    this.low = 0;
  }

}

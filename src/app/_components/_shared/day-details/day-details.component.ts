import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { Ihour } from 'src/app/ihour';

@Component({
  selector: 'weather-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements OnInit {
  eight: any;
  twelve: any;
  pm: any;
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
          this.next();
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
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );
  }

}

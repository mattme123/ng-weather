import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { Ihour } from 'src/app/ihour';

@Component({
  selector: 'weather-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements OnInit {
  eight;
  twelve;
  pm;
  location;
  locDetails: Ihour[];
  constructor(private location$: LocationService) {
    this.locDetails = [];
  }

  ngOnInit() {
    this.location$.nextDay();
    this.location$.$selectedLocation
      .subscribe(
        res => {
          this.location = res;
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );

    this.location$.$eightHour
      .subscribe(
        res => {
          this.eight = res;
          this.locDetails.push(this.eight);
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );
    this.location$.$twelveHour
      .subscribe(
        res => {
          this.twelve = res;
          this.locDetails.push(this.twelve);
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );

    this.location$.$pmHour
      .subscribe(
        res => {
          this.pm = res;
          this.locDetails.push(this.pm);
          console.log(this.pm);
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
        }
      );


  }

}

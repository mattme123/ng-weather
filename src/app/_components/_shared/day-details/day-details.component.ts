import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements OnInit {
  location;
  constructor(private location$: LocationService) { }

  ngOnInit() {
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
  }

}

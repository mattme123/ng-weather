import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss']
})
export class CurrentLocationComponent implements OnInit {
  @Input() image: string;
  i = 0;
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

  nextLocation() {
    this.location = this.location[this.i++];
  }

  previousLocation() {
    this.location = this.location[this.i--];
  }

}

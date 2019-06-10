import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'weather-current-location-geo',
  templateUrl: './current-location-geo.component.html',
  styleUrls: ['./current-location-geo.component.scss']
})
export class CurrentLocationGeoComponent implements OnInit {
  constructor(private api$: ApiService) { }
  temp;
  loc;
  loaded = false;
  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.showPosition(position.coords);
      });
    } else {
      alert('Geolocation is not supported by this browser. Current Location will not be accurate.');
    }
  }

  showPosition(position) {
    this.api$.currentLocationHttpGet(position.latitude, position.longitude)
      .subscribe(
        res => {
          this.loc = res.name;
          this.temp = res.main.temp.toFixed(0);
          this.loaded = true;
        },
        err => {
          this.temp = 'Location not found';
        }
      );
  }



}

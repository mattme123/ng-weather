import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor(private location$: LocationService) { }

  ngOnInit() {
  }

  leftBig() {
    this.location$.previousLocation();
  }

  rightBig() {
    this.location$.nextLocation();
  }

}

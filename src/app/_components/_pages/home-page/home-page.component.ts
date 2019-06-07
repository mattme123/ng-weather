import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  listFull: boolean;
  add: boolean;
  constructor(private api$: ApiService, public location$: LocationService) { }


  ngOnInit() {
    this.add = false;
    this.listFull = false;
  }

  changeAdd() {
    this.add = !this.add;
  }

  addItem() {
    this.api$.addLocation(95240);
    this.changeAdd();
  }

}

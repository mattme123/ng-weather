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
  ok = false;
  t = '';
  img = '../../../../assets/photos/home.jpg';
  constructor(private api$: ApiService, public location$: LocationService) { }


  ngOnInit() {
    this.add = false;
    this.listFull = false;
  }

  changeAdd() {
    this.add = !this.add;
  }

  addItem() {
    this.api$.addLocation(this.t);
    this.changeAdd();
    if (this.location$.locations.length === 8) {
      this.listFull = true;
    } else {
      this.listFull = false;
    }
  }

  weatherClicked(e) {
    this.location$.setLocation(e.target.id);
  }

}

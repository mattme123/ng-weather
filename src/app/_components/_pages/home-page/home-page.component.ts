import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'weather-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  text = 'Add';
  rout = '';
  img = '../../../../assets/photos/cloudy.jpg';
  deg = 34;
  locations = [
    {
      title: 'San Francisco',
      degree: 90
    }
  ];
  add: boolean;
  constructor(private api$: ApiService) { }


  ngOnInit() {
    this.add = false;
    this.api$.addLocation(95240);
  }

  changeAdd() {
    this.add = !this.add;
  }

}

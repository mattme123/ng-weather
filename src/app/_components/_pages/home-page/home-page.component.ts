import { Component, OnInit } from '@angular/core';

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
  constructor() { }


  ngOnInit() {
    this.add = false;
  }

  changeAdd() {
    this.add = !this.add;
  }

}

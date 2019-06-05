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
  constructor() { }

  ngOnInit() {
  }

}

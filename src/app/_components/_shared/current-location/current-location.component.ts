import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss']
})
export class CurrentLocationComponent implements OnInit {
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}

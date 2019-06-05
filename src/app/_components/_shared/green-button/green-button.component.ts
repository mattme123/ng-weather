import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {
  @Input() rout: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}

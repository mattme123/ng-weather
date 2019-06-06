import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-stored-location',
  templateUrl: './stored-location.component.html',
  styleUrls: ['./stored-location.component.scss']
})
export class StoredLocationComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Input() degree: number;
  @Input() image: string;


  constructor() { }

  ngOnInit() {
  }

  delete() {
    alert('You clicked the delete btn');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

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


  constructor(private location$: LocationService) { }

  ngOnInit() {
  }

  delete(e) {
    this.location$.locations.splice(e.target.parentElement.parentElement.parentElement.id, 1);
  }

}

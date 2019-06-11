import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { Router } from '@angular/router';

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


  constructor(private location$: LocationService, private router: Router) { }

  ngOnInit() {
  }

  delete(e) {
    this.location$.locations.splice(e.target.parentElement.parentElement.parentElement.id, 1);
    this.location$.$listFull.next(false);
  }

  weatherClicked(e) {
    this.location$.setLocation(e.target.id);
    this.router.navigate(['/details']);
  }

}

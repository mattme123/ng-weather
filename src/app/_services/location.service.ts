import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Iweather } from '../iweather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations = [];
  $i = new BehaviorSubject<number>(0);
  $selectedLocation = new BehaviorSubject<any>({});
  constructor() {

  }

  getFirstLocation() {
    this.$selectedLocation.next(this.locations[0]);
  }

  nextLocation() {
    const i = this.$i.value;
    if (i + 1 === this.locations.length) {
      this.$i.next(0);
      this.$selectedLocation.next(this.locations[0]);
    } else {
      this.$i.next(i + 1);
      this.$selectedLocation.next(this.locations[this.$i.value]);
    }
  }

  previousLocation() {
    const i = this.$i.value;
    if (i === 0) {
      this.$i.next(this.locations.length - 1);
      this.$selectedLocation.next(this.locations[this.$i.value]);
    } else {
      this.$i.next(i - 1);
      this.$selectedLocation.next(this.locations[this.$i.value]);
    }
  }
}

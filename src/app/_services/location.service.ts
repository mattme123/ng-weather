import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Iweather } from '../iweather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Iweather[];
  $i = new BehaviorSubject<number>(0);
  $eightHour = new BehaviorSubject<any>(2);
  $twelveHour = new BehaviorSubject<any>(4);
  $pmHour = new BehaviorSubject<any>(6);
  $selectedLocation = new BehaviorSubject<any>('');
  $left = new BehaviorSubject<boolean>(false);
  $right = new BehaviorSubject<boolean>(true);
  $listFull = new BehaviorSubject<boolean>(false);
  constructor() {
    this.locations = [];
  }

  setLocation(i: number) {
    this.$selectedLocation.next(this.locations[i]);
    this.resetDay();
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
    this.resetDay();
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
    this.resetDay();
  }

  nextDay() {
    console.log(this.$eightHour.value);
    if (this.$eightHour.value < 26) {
      const i = this.$eightHour.value;
      this.$eightHour.next(i + 8);
      const ii = this.$twelveHour.value;
      this.$twelveHour.next(ii + 8);
      const iii = this.$pmHour.value;
      this.$pmHour.next(iii + 8);
      this.$right.next(true);
      this.$left.next(true);
    }
    if (this.$eightHour.value === 26) {
      this.$right.next(false);
      this.$left.next(true);
    }
  }

  previousDay() {
    if (this.$eightHour.value !== 2) {
      const i = this.$eightHour.value;
      this.$eightHour.next(i - 8);
      const ii = this.$twelveHour.value;
      this.$twelveHour.next(ii - 8);
      const iii = this.$pmHour.value;
      this.$pmHour.next(iii - 8);
      this.$left.next(true);
      this.$right.next(true);
    }
    if (this.$eightHour.value === 2) {
      this.$left.next(false);
      this.$right.next(true);
    }
  }

  resetDay() {
    this.$eightHour.next(2);
    this.$twelveHour.next(4);
    this.$pmHour.next(6);
    this.$left.next(false);
    this.$right.next(true);
  }
}

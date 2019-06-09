import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Iweather } from '../iweather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Iweather[];
  $i = new BehaviorSubject<number>(0);
  $eightHour = new BehaviorSubject<any>(0);
  $twelveHour = new BehaviorSubject<any>(1);
  $pmHour = new BehaviorSubject<any>(2);
  $selectedLocation = new BehaviorSubject<any>({});
  left = new BehaviorSubject<boolean>(false);
  right = new BehaviorSubject<boolean>(true);
  constructor() {
    this.locations = [];
  }

  getFirstLocation() {
    this.$selectedLocation.next(this.locations[0]);
  }

  setLocation(i: number) {
    this.$selectedLocation.next(this.locations[i]);
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
    if (this.$eightHour.value < 9) {
      const i = this.$eightHour.value;
      this.$eightHour.next(i + 3);
      const ii = this.$twelveHour.value;
      this.$twelveHour.next(ii + 3);
      const iii = this.$pmHour.value;
      this.$pmHour.next(iii + 3);
      this.right.next(true);
      this.left.next(true);
    }
    if (this.$eightHour.value === 9) {
      this.right.next(false);
      this.left.next(true);
    }
  }

  previousDay() {
    if (this.$eightHour.value !== 0) {
      const i = this.$eightHour.value;
      this.$eightHour.next(i - 3);
      const ii = this.$twelveHour.value;
      this.$twelveHour.next(ii - 3);
      const iii = this.$pmHour.value;
      this.$pmHour.next(iii - 3);
      this.left.next(true);
      this.right.next(true);
    }
    if (this.$eightHour.value === 0) {
      this.left.next(false);
      this.right.next(true);
    }
    /*     let i = this.$di.value;
        this.$di.next(i - 1);
        this.$pmHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
        i = this.$di.value;
        this.$di.next(i - 1);
        this.$twelveHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
        i = this.$di.value;
        this.$di.next(i - 1);
        this.$eightHour.next(this.locations[this.$i.value].forcast[this.$di.value]); */
  }

  resetDay() {
    this.$eightHour.next(0);
    this.$twelveHour.next(1);
    this.$pmHour.next(2);
    this.left.next(false);
    this.right.next(true);
  }
}

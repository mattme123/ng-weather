import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Iweather } from '../iweather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Iweather[];
  $i = new BehaviorSubject<number>(0);
  $di = new BehaviorSubject<number>(-1);
  $eightHour = new BehaviorSubject<any>({});
  $twelveHour = new BehaviorSubject<any>({});
  $pmHour = new BehaviorSubject<any>({});
  $selectedLocation = new BehaviorSubject<any>({});
  constructor() {
    this.locations = [];
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

  nextDay() {
    let i = this.$di.value;
    this.$di.next(i + 1);
    this.$eightHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
    i = this.$di.value;
    this.$di.next(i + 1);
    this.$twelveHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
    i = this.$di.value;
    this.$di.next(i + 1);
    this.$pmHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
  }

  previousDay() {
    let i = this.$di.value;
    this.$di.next(i - 1);
    this.$pmHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
    i = this.$di.value;
    this.$di.next(i - 1);
    this.$twelveHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
    i = this.$di.value;
    this.$di.next(i - 1);
    this.$eightHour.next(this.locations[this.$i.value].forcast[this.$di.value]);
  }
}

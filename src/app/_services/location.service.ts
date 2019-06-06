import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations = [];
  constructor() {
    setTimeout(() => {
      console.log(this.locations);
    }, 3000);
  }
}

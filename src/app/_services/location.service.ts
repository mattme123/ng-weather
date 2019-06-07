import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iweather } from '../iweather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  locations = [];
  constructor() {
  }
}

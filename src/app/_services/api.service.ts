import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iweather } from '../iweather';
import { LocationService } from './location.service';
import { Ihour } from '../ihour';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherURLZip = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  weatherForcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=';
  locationCurrent = 'https://api.openweathermap.org/data/2.5/weather?';
  go = false;
  counter = 1;
  t = 1;
  tt = 1;
  apiKey = '&APPID=815a624a29a477de2d5976b087f93f21';

  tempObj: Iweather;
  forcastTempObj: Ihour;
  start: boolean;

  constructor(private http$: HttpClient, private location$: LocationService) {
    this.tempObjReset();
    this.forcastTempObjReset();
  }

  ngOnInit() { }

  httpGet(url: any): Observable<any> {
    return this.http$.get<any>(url);
  }

  addLocation(url: any): boolean {
    let i: boolean;
    this.httpGet(this.weatherURLZip + url + this.apiKey)
      .subscribe(
        res => {
          this.tempObj.clouds = res.clouds.all;
          const d = new Date();
          this.tempObj.date = this.convertDate(d.getDay() + 1);
          this.tempObj.humitidy = res.main.humidity;
          this.tempObj.temp = this.convertTemp(res.main.temp);
          this.tempObj.tempMin = this.convertTemp(res.main.temp_min);
          this.tempObj.tempMax = this.convertTemp(res.main.temp_max);
          this.tempObj.name = res.name;
          this.tempObj.description = res.weather[0].main;
          this.tempObj.windDirection = res.wind.deg;
          this.tempObj.windSpeed = Number((res.wind.speed * 2.23694).toFixed(0));
          this.httpGet(this.weatherForcastURL + res.id + this.apiKey).subscribe(
            secondRes => {
              for (const i of secondRes.list) {
                if (this.convertTime(i.dt) > 2) {
                  this.start = true;
                }
                if (this.convertTime(i.dt) === 2 && this.start) {
                  this.go = true;
                }
                if (this.go) {
                  this.forcastTempObj.clouds = i.clouds.all;
                  this.forcastTempObj.temp = this.convertTemp(i.main.temp);
                  this.forcastTempObj.time = this.convertTime(i.dt);
                  this.forcastTempObj.date = this.convertDate(d.getDay() + this.t);
                  this.forcastTempObj.summary = i.weather[0].main;
                  this.forcastTempObj.description = i.weather[0].description;
                  this.forcastTempObj.windSpeed = Number((i.wind.speed * 2.23694).toFixed(0));
                  this.forcastTempObj.windDirection = i.wind.deg;
                  this.forcastTempObj.tempMin = this.convertTemp(i.main.temp_min);
                  this.forcastTempObj.tempMax = this.convertTemp(i.main.temp_max);
                  this.forcastTempObj.humitidy = i.main.humidity;
                  this.tempObj.forcast.push(this.forcastTempObj);
                  this.forcastTempObjReset();
                  if (this.tt === 8) {
                    this.t++;
                    this.tt = 1;
                  } else {
                    this.tt++;
                  }
                }
              }
              this.location$.locations.push(this.tempObj);
              this.tempObjReset();
              this.start = false;
              this.go = false;
              this.t = 1;
              this.tt = 1;
            });
          i = true;
        },
        err => {
          console.log(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
          i = false;
        });
  }

  tempObjReset() {
    this.tempObj = {
      clouds: 0,
      time: 0,
      humitidy: 0,
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      name: '',
      description: '',
      windDirection: '',
      windSpeed: 0,
      forcast: []
    };
  }

  forcastTempObjReset() {
    this.forcastTempObj = {
      temp: 0,
      clouds: 0,
      time: 0,
      summary: '',
      description: '',
      windSpeed: 0,
      windDirection: 0,
      tempMin: 0,
      tempMax: 0,
      humitidy: 0,
    };
  }

  convertTemp(orig): number {
    let temp = orig - 273.15;
    const temp2 = 9 / 5;
    temp = temp * temp2;
    return Number((temp + 32).toFixed(0));
  }

  convertDate(inp: number) {
    let ans: string;
    switch (inp) {
      case 0:
        ans = 'Sunday';
        break;
      case 1:
        ans = 'Monday';
        break;
      case 2:
        ans = 'Tuesday';
        break;
      case 3:
        ans = 'Wednesday';
        break;
      case 4:
        ans = 'Thursday';
        break;
      case 5:
        ans = 'Friday';
        break;
      case 6:
        ans = 'Saturday';
        break;
    }
    return ans;
  }

  convertTime(time): number {
    const ddd = new Date(time * 1000);
    return ddd.getHours();
  }
}



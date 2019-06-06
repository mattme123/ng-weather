import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iweather } from '../iweather';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherURLZip = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  weatherForcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=';
  locationCurrent = 'https://api.openweathermap.org/data/2.5/weather?';

  apiKey = '&APPID=815a624a29a477de2d5976b087f93f21';

  tempObj: Iweather;
  forcastTempObj: Iweather;

  constructor(private http$: HttpClient, private location$: LocationService) {
    this.tempObjReset();
    this.forcastTempObjReset();
  }

  ngOnInit() {

  }


  httpGet(url: any): Observable<any> {
    return this.http$.get<any>(url);
  }

  addLocation(url: any) {
    this.httpGet(this.weatherURLZip + url + this.apiKey)
      .subscribe(
        res => {
          console.log(this.tempObj);
          this.tempObj.clouds = res.clouds.all;
          this.tempObj.time = res.dt;
          this.tempObj.humitidy = res.main.humidity;
          this.tempObj.temp = res.main.temp;
          this.tempObj.tempMin = res.main.temp_min;
          this.tempObj.tempMax = res.main.temp_max;
          this.tempObj.name = res.name;
          this.tempObj.description = res.weather[0].main;
          this.tempObj.windDirection = res.wind.deg;
          this.tempObj.windSpeed = res.wind.speed;

          this.httpGet(this.weatherForcastURL + res.id + this.apiKey).subscribe(
            secondRes => {
              for (const i of secondRes.list) {
                this.forcastTempObj.clouds = i.clouds.all;
                this.forcastTempObj.time = i.dt;
                this.forcastTempObj.date = i.dt_txt;
                this.forcastTempObj.humitidy = i.main.humidity;
                this.forcastTempObj.temp = i.main.temp;
                this.forcastTempObj.tempMin = i.main.temp_min;
                this.forcastTempObj.tempMax = i.main.temp_max;
                this.forcastTempObj.name = i.name;
                this.forcastTempObj.description = i.weather[0].main;
                this.forcastTempObj.windDirection = i.wind.deg;
                this.forcastTempObj.windSpeed = i.wind.speed;
                this.tempObj.forcast.push(this.forcastTempObj);
                this.forcastTempObjReset();
              }
              this.location$.locations.push(this.tempObj);
            });
        },
        err => {
          console.log(err);
          alert(`HTTP GET ERROR - ${err.error.cod} - ${err.error.message}`);
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
      clouds: 0,
      time: 0,
      date: '',
      humitidy: 0,
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      name: '',
      description: '',
      windDirection: '',
      windSpeed: 0,
    };
  }
}



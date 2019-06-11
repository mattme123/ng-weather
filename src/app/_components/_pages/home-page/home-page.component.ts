import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'weather-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  listFull: boolean;
  add: boolean;
  ok = false;
  t = '';
  img = '../../../../assets/photos/home.jpg';
  constructor(private api$: ApiService, public location$: LocationService) { }


  ngOnInit() {
    this.add = false;
    this.location$.$listFull
      .subscribe(
        res => {
          this.listFull = res;
        }
      );
  }

  changeAdd() {
    this.add = !this.add;
  }

  addItem() {
    const ipt = document.getElementById('ipt') as HTMLInputElement;
    if (this.validateString(this.t)) {
      this.api$.addLocation(this.t);
      ipt.className = 'form-control black-border';
      this.changeAdd();
      if (this.location$.locations.length === 8) {
        this.location$.$listFull.next(true);
      } else {
        this.location$.$listFull.next(false);
      }
    } else {
      ipt.className = 'form-control red-border shake';
      setTimeout(() => {
        ipt.className = 'form-control red-border';
      }, 500);
    }
  }


  validateString(inputTxt: string) {
    const letters = /^[a-zA-Z0-9]+$/;
    if (inputTxt.match(letters)) {
      return true;
    } else {
      return false;
    }
  }

}

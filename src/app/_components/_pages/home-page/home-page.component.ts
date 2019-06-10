import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { LocationService } from 'src/app/_services/location.service';
import { Router } from '@angular/router';

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
  constructor(private api$: ApiService, public location$: LocationService, private router: Router) { }


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
    let ipt = document.getElementById('ipt') as HTMLInputElement;
    if (this.validateString(this.t) && this.api$.addLocation(this.t)) {
      ipt.className = 'form-control black-border';
      console.log(ipt.className);
      this.changeAdd();
      if (this.location$.locations.length === 8) {
        this.location$.$listFull.next(true);
      } else {
        this.location$.$listFull.next(false);
      }
    } else {
      ipt.className = 'form-control red-border';
    }
  }

  weatherClicked(e) {
    this.location$.setLocation(e.target.parentElement.parentElement.parentElement.id);
    this.router.navigate(['/details']);
  }


  validateString(inputTxt: string) {
    const letters = /^[a-zA-Z0-9]+$/;
    if (inputTxt.match(letters)) {
      return true;
    } else {
      alert('Invalid');
      return false;
    }
  }

}

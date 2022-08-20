import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-person',
  templateUrl: './header-person.component.html',
  styleUrls: ['./header-person.component.less']
})
export class HeaderPersonComponent implements OnInit {
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  toLogin() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;

  }

  toPersonHome() {

  }

  toPersonSetting() {

  }

}

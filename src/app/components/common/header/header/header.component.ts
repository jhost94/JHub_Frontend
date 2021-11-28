import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/constants';

@Component({
  selector: 'hub-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  name = CONSTANTS.SETTINGS.FRONTEND.NAME;
  links = CONSTANTS.SETTINGS.FRONTEND.ROUTES;
  assets = CONSTANTS.ASSETS.LOGO;

  constructor() {}

  ngOnInit(): void {
  }

}

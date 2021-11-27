import { Component, Input, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/constants';

@Component({
  selector: 'hub-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  name: string = 'hub';
  links = CONSTANTS.SETTINGS.FRONTEND.ROUTES;
  constructor() {}

  ngOnInit(): void {
    this.name = CONSTANTS.SETTINGS.FRONTEND.NAME;
  }

}

import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/constants';

@Component({
  selector: 'hub-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  name: string = 'hub';
  links = CONSTANTS.SETTINGS.FRONTEND.ROUTES;

  constructor() {}

  ngOnInit(): void {
    this.name = CONSTANTS.SETTINGS.FRONTEND.NAME;
  }

}

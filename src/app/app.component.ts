import { Component } from '@angular/core';
import { CONSTANTS } from 'src/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = CONSTANTS.SETTINGS.FRONTEND.NAME;
}

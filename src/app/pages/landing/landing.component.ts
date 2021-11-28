import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/constants';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {

  streams: {name: string, link: string, icon: string}[] = [];
  translation = CONSTANTS.TRANSLATIONS;

  constructor() { }

  ngOnInit(): void {
    this.streams.push({name: "BunnyButtcheeks", link: "https://www.twitch.tv/bunnybuttcheeks", icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/ba01ed55-52ce-495a-a6be-601578adeeda-profile_image-70x70.png"});
    this.streams.push({name: "littl3bull", link: "https://www.twitch.tv/littl3bull", icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/29576b5b-5ff7-415d-a2bb-f7db55ac7268-profile_image-70x70.png"});
    this.streams.push({name: "Marie_Kitsune", link: "https://www.twitch.tv/marie_kitsune", icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/6f140623-45c0-485c-969f-345df1b27e07-profile_image-70x70.png"});
  }

}

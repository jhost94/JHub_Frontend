import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {

  streams: {name: string, link: string}[] = [];
  constructor() { }

  ngOnInit(): void {
    this.streams.push({name: "BunnyButtcheeks", link: "https://www.twitch.tv/bunnybuttcheeks"});
    this.streams.push({name: "littl3bull", link: "https://www.twitch.tv/littl3bull"});
    this.streams.push({name: "Marie_Kitsune", link: "https://www.twitch.tv/marie_kitsune"});
  }

}

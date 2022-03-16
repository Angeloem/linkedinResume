import {Component, Input, OnInit} from '@angular/core';
import {TileModel} from "../../models/tile.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() type: string | undefined;
  tile!: TileModel[];

  constructor() {
    this.tile = [
      {
        sent: false,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: true,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: false,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo, Like a thousand smiles on your life, may you grow and ignite the fire that's gonna come",
        time: "23:05"
      },
      {
        sent: true,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: false,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: true,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: false,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
      {
        sent: true,
        avatar: "assets/images/doe.jpg",
        date: "March 19",
        text: "Happy Birthday Kiddo",
        time: "23:05"
      },
    ];
  }

  ngOnInit(): void {
  }

}

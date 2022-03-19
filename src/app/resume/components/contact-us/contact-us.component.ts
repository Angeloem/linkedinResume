import {Component, OnInit} from '@angular/core';
import {ContactTileInterface} from '../contact-tile/contact-tile.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactMe: ContactTileInterface[] = [
    {
      icon: "📞",
      contact: "+255789599505"
    },
    {
      icon: "📧",
      contact: "esanga@live.com"
    },
    {
      icon: "📮",
      contact: "35091 Dar es Salaam"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

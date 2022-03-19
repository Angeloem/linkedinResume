import {Component, Input, OnInit} from '@angular/core';

export interface ContactTileInterface {
  icon: any;
  contact: string | number;
}

@Component({
  selector: 'app-contact-tile',
  templateUrl: './contact-tile.component.html',
  styleUrls: ['./contact-tile.component.scss']
})
export class ContactTileComponent implements OnInit {
  @Input() contact!: ContactTileInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}

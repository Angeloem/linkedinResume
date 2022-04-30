import {Component, Input, OnInit} from '@angular/core';

export interface HeaderTextInterface {
  header: string;
  year: string;
  text: string;
  subhead: string;
}

@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {
  @Input() headerTxt!: HeaderTextInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}

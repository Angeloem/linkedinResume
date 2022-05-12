import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

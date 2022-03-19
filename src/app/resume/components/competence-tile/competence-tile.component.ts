import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-competence-tile',
  templateUrl: './competence-tile.component.html',
  styleUrls: ['./competence-tile.component.scss']
})
export class CompetenceTileComponent implements OnInit {
  circles!: number[];
  @Input() incoming!: number;
  @Input() text!: string;

  constructor() {
    this.circles = [0, 1, 2, 3, 4];
  }

  ngOnInit(): void {
  }

}

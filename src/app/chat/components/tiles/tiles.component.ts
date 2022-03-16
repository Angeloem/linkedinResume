import {Component, Input, OnInit} from '@angular/core';
import {TileModel} from "../../models/tile.model";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  @Input() tile!: TileModel;

  constructor() { }

  ngOnInit(): void {
  }

}

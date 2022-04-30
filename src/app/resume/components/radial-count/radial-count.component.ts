import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Circle} from "../../../canvas/circle";

@Component({
  selector: 'app-radial-count',
  templateUrl: './radial-count.component.html',
  styleUrls: ['./radial-count.component.scss']
})
export class RadialCountComponent implements OnInit {
  @ViewChild('canvas', {static: true})
  canvas!: ElementRef<HTMLCanvasElement>;

  circle!: Circle;

  private ctx!: CanvasRenderingContext2D | null;
  constructor() {
  }

  ngOnInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.circle = new Circle(1, this.ctx);
    this.circle.draw(200);
  }

}

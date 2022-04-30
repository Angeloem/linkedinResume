export class Circle {
  private _amount: number;

  constructor(public amount: number, private ctx: CanvasRenderingContext2D | null) {
    this._amount = amount;
  }

  public draw(width: number) {
    /* this function takes in the amount in terms of radians, gotten from a percentage entered*/
    /* and draws an arc that grows from 0 to 360deg for a min and a max respectively*/
    /* the angle starts at 0 and ends at where the amount is specified */

    // this starts at the center of the canvas
    this.ctx!.arc(width / 2, 70, 70, 1.5 * Math.PI, this.getEndAngle(), false)

    this.ctx!.stroke()
  }

  private getEndAngle() {
    /*(((this.amount * 360) / 100))*/
    return 180 / 57.2957795;
  }
}

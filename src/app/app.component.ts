import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("component", {static: true}) component!: ElementRef;
  title = 'linkedinResume';

  // the list of incoming items
  people!: string[];

  // the list that holds the selected items
  selected!: string[];

  // the list that holds the rejected items
  rejected!: string[];

  // the index to govern what resume to show at the moment
  index = 0;

  get _canAddRej() {
    return this.index < this.people.length - (-1 + 1);
  }

  ngOnInit(): void {
    this.people = [
      'Emanuel Sanga',
      'Eric Chingalo',
      'Andy Mwamengo',
      'Any Other Mater',
      'Mate Any Other'
    ]

    this.selected = []
    this.rejected = []
  }

  getStyles(i: number) {
    return `top: ${i * 10}px;left: ${i * 10}px; transform: scale(.4)`
  }

  _alterIndex(index: number) {
    if (this._canAlterIndex(index))
      this.index += index
  }

  _accept() {
    const res = this._operateRejAdd(this.selected, this.rejected)
    this.rejected = res[1]
    this.selected = res[0]
  }

  _reject() {
    const res = this._operateRejAdd(this.rejected, this.selected)

    this.rejected = res[0]
    this.selected = res[1]
  }

  _operateRejAdd(ownerArray: string[], toCheckArray: string[]) {
    if (this._canAddRej) {
      if (!ownerArray.includes(this.people[this.index]))
        ownerArray.push(this.people[this.index])

      // check if this element was selected before moving on
      if (toCheckArray.includes(this.people[this.index]))
        toCheckArray = toCheckArray.filter(item => item != this.people[this.index])

      this._alterIndex(+1)
    }

    return [ownerArray, toCheckArray]
  }

  _canAlterIndex(index: number) {
    return (this.index != 0 && index == -1) || (this.index < this.people.length - 1 && index == +1)
  }
}

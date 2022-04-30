import {Component, OnInit} from '@angular/core';
import {HeaderTextInterface} from "../header-text/header-text.component";

@Component({
  selector: 'app-backgee',
  templateUrl: './backgee.component.html',
  styleUrls: ['./backgee.component.scss']
})
export class BackgeeComponent implements OnInit {
  headerTxt!: {
    item: string;
    content: HeaderTextInterface[]
  }[];

  constructor() {
    this.headerTxt = [
      {
        item: 'Education',
        content: [
          {
            header: 'University of Dar es Salaam',
            year: '2008',
            subhead: 'Computer Science',
            text: 'Did Computer Science at the University of Dar es Salaam. Left after kuchomoa a carrie',
          },
          {
            header: 'University of Dar es Salaam',
            year: '2011',
            text: 'Did Computer Data Science at the University of Dar es Salaam. Left after kuchomoa',
            subhead: 'Data Science'
          },
        ]
      },
      {
        item: 'Experience',
        content: [
          {
            header: 'Systems Developer',
            year: '2019-',
            subhead: 'Marimba Informatics',
            text: 'Working as a developer at the Company. My role is to develop both in frontend and backend places',
          },
          {
            header: 'Budgeter System',
            year: '2018-',
            text: 'Founded and developed the Budgeter System Software. Marinating it to its growth at the moment',
            subhead: 'Fullstack Developer'
          },
        ]
      },
    ]
  }


  ngOnInit(): void {
  }

}

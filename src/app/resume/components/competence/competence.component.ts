import { Component, OnInit } from '@angular/core';

export interface CompetenceInterface {
  text: string;
  level: number;
}

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  competences!: CompetenceInterface[];

  constructor() {
    this.competences = [
      {
        text: 'Web Applications Development',
        level: 3
      },
      {
        text: 'Applications Development',
        level: 4
      },
      {
        text: 'Database Design and Development',
        level: 3
      },
      {
        text: 'Backend Development',
        level: 4
      },
      {
        text: 'DevOps',
        level: 1
      },
    ]
  }

  ngOnInit(): void {
  }

}

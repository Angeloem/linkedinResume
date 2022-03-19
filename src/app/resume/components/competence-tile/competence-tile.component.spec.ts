import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTileComponent } from './competence-tile.component';

describe('CompetenceTileComponent', () => {
  let component: CompetenceTileComponent;
  let fixture: ComponentFixture<CompetenceTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

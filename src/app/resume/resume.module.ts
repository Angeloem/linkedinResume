import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CompetenceComponent } from './components/competence/competence.component';
import { MajorItemComponent } from './components/major-item/major-item.component';
import { LevelComponent } from './components/level/level.component';
import { PagesComponent } from './pages/pages.component';
import { ContactTileComponent } from './components/contact-tile/contact-tile.component';
import { CompetenceTileComponent } from './components/competence-tile/competence-tile.component';


@NgModule({
  declarations: [
    TitleComponent,
    AboutMeComponent,
    ContactUsComponent,
    CompetenceComponent,
    MajorItemComponent,
    LevelComponent,
    PagesComponent,
    ContactTileComponent,
    CompetenceTileComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResumeModule {
}

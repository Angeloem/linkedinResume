import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { PageComponent } from './page/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { TilesComponent } from './components/tiles/tiles.component';



@NgModule({
  declarations: [
    ChatComponent,
    PageComponent,
    HeaderComponent,
    BottomComponent,
    TilesComponent
  ],
  exports: [
    PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }

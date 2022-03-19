import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ChatModule} from "./chat/chat.module";
import {ResumeModule} from "./resume/resume.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ChatModule,
        ResumeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

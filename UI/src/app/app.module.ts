import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChattingViewComponent } from './chatting-view/chatting-view.component';
import { ChattingInputComponent } from './chatting-input/chatting-input.component';
import { ChattingSendComponent } from './chatting-send/chatting-send.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChattingViewComponent,
    ChattingInputComponent,
    ChattingSendComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

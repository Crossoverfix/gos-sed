import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GosSedComponent } from './gos-sed/gos-sed.component';
import { WidgetFrameComponent } from './widget-frame/widget-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    GosSedComponent,
    WidgetFrameComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

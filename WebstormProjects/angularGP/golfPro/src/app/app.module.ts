import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GolfApiComponent } from '../golf-api/golf-api.component';
import { GetIdComponent } from '../get-id/get-id.component';


@NgModule({
  declarations: [
    AppComponent,
    GolfApiComponent,
    GetIdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

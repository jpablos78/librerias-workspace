import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MiLibreriaModule } from 'mi-libreria';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MiLibreriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http
import {HttpClientModule} from '@angular/common/http'
// toastr


import { AppComponent } from './app.component';
import {} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr'
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

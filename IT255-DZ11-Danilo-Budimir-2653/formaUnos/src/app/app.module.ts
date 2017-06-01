import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { DodajAutoComponent } from './dodajAuto';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DodajAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AppComponent } from './app.component';
import { BoxRequestComponent } from './components/templates/box-request/box-request.component';
import { HomeComponent } from './components/views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BoxRequestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

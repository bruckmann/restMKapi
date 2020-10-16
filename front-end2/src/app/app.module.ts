import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AppComponent } from './app.component';
import { BoxRequestComponent } from './components/templates/box-request/box-request.component';
import { HomeComponent } from './components/views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { LastRequestComponent } from './components/templates/last-request/last-request.component';



@NgModule({
  declarations: [
    AppComponent,
    BoxRequestComponent,
    HomeComponent,
    LastRequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

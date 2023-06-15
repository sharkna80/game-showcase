import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpErrorInterceptor } from './interceptors/http-errors.interceptor';
import { HttpHeaderInterceptor } from './interceptors/http-headers.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from "ngx-gauge";
import {DatePipe} from "@angular/common";
import {GameTabsComponent} from "./components/game-tabs/game-tabs.component";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    GameDetailsComponent,
    GameTabsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxGaugeModule
  ],
  providers: [
    HttpService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeaderInterceptor,
    multi: true
  }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

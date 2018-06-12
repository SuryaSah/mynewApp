import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/index';
import { SearchPageComponent } from './page/index';
import { SearchComponent } from './search/index';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,MovieComponent,SearchComponent , SearchPageComponent
  ],
  imports: [
    BrowserModule,HttpModule,InfiniteScrollModule,FormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

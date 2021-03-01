import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import {simpleReducer} from './simple.reducer';
import { postReducer} from './post/post.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer,
      message : simpleReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

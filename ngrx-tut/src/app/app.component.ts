import { Component } from '@angular/core';
import {  Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as PostActions from "./post/post.actions";
import { Post } from './post/post.model';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-tut';
  post: Observable<Post>;
  textb: string;
constructor(private store: Store<AppState>){
this.post = this.store.select('post')
}

editText(val){
  console.log(this.textb,val,"ngmodel")
  this.store.dispatch(new PostActions.EditText(val))
}

upvote(){
  this.store.dispatch(new PostActions.Upvote())
}

downvote(){
  this.store.dispatch(new PostActions.Downvote())
}

resetPost(){
  this.store.dispatch(new PostActions.Reset())
}

}

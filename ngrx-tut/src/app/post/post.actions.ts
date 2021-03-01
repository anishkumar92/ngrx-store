import { Action } from '@ngrx/store';
import { Post } from './post.model';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post]Reset';


export class EditText implements Action {
  readonly type = EDIT_TEXT;
  constructor(public payload: string) {}
}

export class Upvote implements Action {
  readonly type = UPVOTE;
  constructor(public payload?: Post) {}
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
  constructor(public payload?: any) {}
}

export class Reset implements Action {
  readonly type = RESET;
  constructor(public payload?: any) {}
}


export type All
  = EditText
  | Upvote
  | Downvote
  | Reset;
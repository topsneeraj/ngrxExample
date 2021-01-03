import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, observable, of } from 'rxjs'
import { Action } from '@ngrx/store';
import * as userAction from './user.actions';
import { UserService } from './user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.getAllUserData().pipe(
        map(users => (new userAction.LoadUsersSuccess({ data: users }))),
        catchError(err => of(new userAction.LoadUsersFailure({ error: err })))
      )
    )

  )

}

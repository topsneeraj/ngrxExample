import { Component,OnInit } from '@angular/core';
import {IUser} from  './User';
import {UserService} from  './user.service';
import {Store,select} from '@ngrx/store' 
import * as UserActions  from './user.actions';
import * as fromUser from  './user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  errorMessage   = '';
  users:IUser[] = [];
  constructor(private store :Store ){

  }
  ngOnInit(){
this.store.dispatch(new UserActions.LoadUsers());
this.store.pipe(select(fromUser.getUsers)).subscribe(user=>{
  this.users = user
})

  }
  title = 'ngrxExample';
}

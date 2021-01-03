import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUserData() :Observable<IUser[]>
  {
    return this.http.get<IUser[]>("https://restcountries.eu/rest/v2/all");
  }
}

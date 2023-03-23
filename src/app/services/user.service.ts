import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment'
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl =  "https://localhost:7208/api";
  private url  = "User";
  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/${this.url}`);
  }
}

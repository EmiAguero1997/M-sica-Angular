import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  token: string ="AIzaSyDRjqNHU2E5QekMtdx_DaNiultvOBHJDaE";
  constructor(private http: HttpClient) { }

  register(user:any) : Observable<any>
  {
    return this.http.post(this.apiurl + "AIzaSyDRjqNHU2E5QekMtdx_DaNiultvOBHJDaE",user,{});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/register';
  private loginUrl = 'http://localhost:3000/login';
  constructor(private _http : HttpClient, private _router : Router) { }

  register(user): Observable<any>{
    return this._http.post<any>(this.registerUrl, user);
  }

  login(user): Observable<any>{
    return this._http.post(this.loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token');
  }

}

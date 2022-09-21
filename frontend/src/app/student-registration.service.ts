import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private studentRegUrl = "http://localhost:3000/home";
  private centerUrl = "http://localhost:3000/center";

  constructor(private _http: HttpClient) { }

  studentReg(student): Observable<any>{
    return this._http.post(this.studentRegUrl, student);
  }

  getCenterData(){
    return this._http.get(this.centerUrl);
  }
}

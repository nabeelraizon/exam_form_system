import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = "EEMS";

  registeredUserData = {
    name: "",
    dob: "",
    email: "",
    contact: "",
    password: "",
    cpass: ""
   };

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.register(this.registeredUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res);
        this._router.navigate(['/home']);
        this.registeredUserData = {
          name: "",
          dob: "",
          email: "",
          contact: "",
          password: "",
          cpass: ""
         };},
      err => {console.log(err)}
    )
  }

}

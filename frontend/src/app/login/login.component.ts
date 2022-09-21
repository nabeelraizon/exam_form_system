import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: "",
    password: ""
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.login(this.loginUserData)
    .subscribe(
      res => { 
              localStorage.setItem('token', res.token);
              console.log(res) 
            this._router.navigate(['/home']) },
      err => { console.log(err) }
    )
  }

}

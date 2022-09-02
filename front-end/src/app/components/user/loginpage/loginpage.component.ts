import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { loginModel } from '../../Models/loginModel';
import { AuthenticationService } from '../../services/authentication/authentication.service';


import { User } from '../registration/user';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {


  username: string = "";
  password: string = "";
  baseUrl: string = "http://localhost:8081/login";
  user: User = new User("", "", "", "");
  isLoggedIn: boolean | undefined;
  isFormInvalid = false;
  areCredentialsInvalid = false;
  sessionKey: any = "";
  result: string = "";
  baseUrlorg: string = "";
  orgResult:any;
  constructor(private router: Router, private http: HttpClient, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const loginSuccess = sessionStorage.getItem("loginSuccess");
    if(loginSuccess)
    {
      console.log("Is Login Success");
      this.router.navigate(['/api']);
    }
    else 
    {
      this.router.navigate(['']);
    }
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    if (!signInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }

    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {
    this.user.username = signInForm.value.username;
    this.user.password = signInForm.value.password;
    sessionStorage.setItem("username",signInForm.value.username);
    sessionStorage.setItem("password",signInForm.value.password);
    let response = this.authenticationService.authenticate(this.user)
    response.subscribe((res) => {
      this.result = JSON.stringify(res)
      if (this.result !== null) {
        console.log("In the if Part:" + this.result);
        this.authenticationService.isSuccess = true;
        alert("The Login is Successfull");
        this.sessionKey = JSON.parse(this.result);
        this.storeRoleId(this.sessionKey);
        //this.storeuserRoleId(this.sessionKey);
        console.log(this.sessionKey);
        sessionStorage.setItem('userId', JSON.stringify(res));
        sessionStorage.setItem('logInSuccess',"true");
        this.router.navigate(['/aboutus']);

      }
      else {
        console.log("In the else part:" + this.result);
        sessionStorage.setItem('logInSuccess',"false");
        this.authenticationService.isSuccess = false;
        alert("Invalid Credentials");
        this.router.navigate(['/login']);
      }
    });
  }


  private storeRoleId(sessionKey: string) {
    console.log("In the Session Key Store Method");

    this.baseUrlorg = "http://localhost:8081/User/Role/" + sessionKey;
    console.log("The Base Url for Role is", this.baseUrlorg);
    let response = this.http.get<string>(this.baseUrlorg);
    response.subscribe(res => {
      this.result = JSON.parse(res.toString());
      sessionStorage.setItem("roleId", this.result);
      
    });
  }
  




}

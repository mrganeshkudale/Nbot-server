import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from '../../Models/loginModel';
import { User } from '../../user/registration/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  isSuccess: boolean = JSON.parse(sessionStorage.getItem('logInSuccess') || 'false');
  isAuthenticated: boolean = false;
  result: any;
  url: string = "http://localhost:8081/User/Role/";
  baseUrl: string = "http://localhost:8081/login";
  Role: string = "";
  sessionKey: string = "";
  loginDetails: loginModel = new loginModel("", "", "");
  constructor(private http: HttpClient, private router: Router) {
    
   }
   ngOnInit() {
    this.isLoggedIn();
   }
  sendAlert(message: any) {
    alert(message)
  }
  authenticate(user: User) {
    console.log(this.isSuccess);
    return this.http.post(this.baseUrl, user, { responseType: 'text' as 'json' })

  }
  checkStorage()
  {
    const authToken = sessionStorage.getItem('userId');
    if(authToken)
    {
      this.sessionKey = authToken;
      console.log("Authentication Token is present.!");
      
    }
    else 
    {
      console.log("Authentication Token is not present.!");
    }
  }
  logout() {
    if(!this.isLoggedIn()) return;
    this.isSuccess = false;
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  public isLoggedIn()
  {
    
    if(this.sessionKey)
    {

      return true;
    }
    return false;
  }


}

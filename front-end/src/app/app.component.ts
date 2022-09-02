import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from './components/services/authentication/authentication.service';
import { User } from './components/user/registration/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nbotui';
  user:User = new User("","","","");
  username:any = sessionStorage.getItem("username");
  password:any = sessionStorage.getItem("password");
  constructor(public authenticationService:AuthenticationService,public http:HttpClient)
  {
    
  }
  ngOnInit() {
    this.isLoggedIn();
    this.username = sessionStorage.getItem("username");
  }
  isLoggedIn()
  {
    console.log("Is Logged In Method");
    this.authenticationService.checkStorage();
    if(this.authenticationService.isLoggedIn())
    {
     this.user.username = this.username;
     this.user.password = this.password;  
     this.authenticationService.authenticate(this.user).subscribe();
    }
  }
  logout()
  {
    
    this.authenticationService.logout();
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/registration/user';
import { Sensor } from '../Models/Sensor';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  url: string = "http://localhost:8081/User/Role";
  
  sensors: Sensor[] = [
    
  ];
  users: User[] = [];
  isSuccess:boolean = false;
  displayTab:any;
  user:User = new User("","","","");
  username:any = sessionStorage.getItem("username");
  password:any = sessionStorage.getItem("password");
  constructor(private http:HttpClient,public authenticationservice:AuthenticationService) { 
    this.authenticationservice.isLoggedIn();
  }


  ngOnInit(): void {
    
    this.displayTab = sessionStorage.getItem("roleId");
    console.log(this.displayTab);
    
  }
  
  public displayUpdator()
  {
    if(this.displayTab !== "3" && this.displayTab !== "4")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  public displayGlobalLicense()
  {
    if(this.displayTab == "1")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  isLoggedIn()
  {
    console.log("Is Logged In Method");
    this.authenticationservice.checkStorage();
    if(this.authenticationservice.isLoggedIn())
    {
     this.user.username = this.username;
     this.user.password = this.password;  
     this.authenticationservice.authenticate(this.user).subscribe();
    }
  }
  id:any = "sensor";
  public tabChange(ids: any)
  {
    this.id=ids;
  }
  public isOrganization()
  {
    var success = localStorage.getItem('roleguard');
    return success;
  }
  
}

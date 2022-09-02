import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/registration/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  user: User = new User("","","","");
  
    

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getParticularUser();
   
  }
 

  public getParticularUser()
  {
    let usrId = localStorage.getItem("usrId");
    console.log("The User Id For Paticular Profile is "+usrId);
    let url="http://localhost:8081/User/"+usrId;
    this.http.get<User>(url).subscribe(
      res =>{
        this.user = res;
      });
  }
}

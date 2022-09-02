import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../../services/user-registration.service';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';
import { user } from '../../Models/user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:user = new user("","","","","","3","");
  message: any;
  constructor(private service:UserRegistrationService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  sendAlert():void {
    alert("User Registered Sucessfully. Thank you");
  }
  public registerNow()
  {
    this.user.id = uuid.v4();
    let response = this.service.doRegistration(this.user);
    response.subscribe((data)=>this.message=data);
    this.sendAlert()
  }
  public doRegistration(user:user)
  {
    
    return this.http.post<user>("http://localhost:8181/user",user,{responseType:'text' as 'json'}).subscribe(res => {this.user = res});
    
  }

}

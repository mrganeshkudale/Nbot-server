import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchorganization } from '../../Models/searchorganization';
import { searchRoles } from '../../Models/searchRoles';
import { searchUser } from '../../Models/searchUser';
import { Sensor } from '../../Models/Sensor';
import { user } from '../../Models/user';
import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  baseURL="http://localhost:8081/User/Role";
  updateUrl="http://localhost:8081/User";
  userUrl="http://localhost:8081/User/Org"
  id: string ="";
  sensor: Sensor= new Sensor("","","","",false,"","");
  user:user = new user("","","","","","","");
  message: any;
  roles:searchRoles[] = [];
  roleid:any;
  orgid:string = "";
  orgs : searchorganization[] = [];
  users : searchUser[] = [];
  userid : string = "";
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getUserRoles();
    console.log(this.roles);
    this.getAllOrgs();
  }
  sendAlert(message:any):void {
    alert(message);
  }
  public updateNow()
  {
    this.user.usrRole = this.roleid.toString();
    this.user.orgId = this.orgid;
    this.user.id = this.userid;
    let response = this.doUpdatation(this.user);
    response.subscribe((data)=>this.message=data);
    this.sendAlert(this.message);
  }
  public doUpdatation(user:user)
  {
    
    return this.http.put(`${this.updateUrl}/${user.id}`,user,{responseType:'text' as 'json'});
    
  }


  ///////////////////////////////////****Code to get All Users, Organizations & Roles for user updatation****/////////////////////////////////////////////////////////////
  public getUserRoles()
  {
    this.http.get<searchRoles[]>(this.baseURL).subscribe(res => {this.roles = res
    console.log(this.roles);
    });
  }
  public getAllOrgs()
  {
    this.http.get<searchorganization[]>("http://localhost:8084/organisation").subscribe(res => {this.orgs = res});
  }
  public getAllUsers(orgid:string)
  {
    this.http.get<searchUser[]>(`${this.userUrl}/${orgid}`).subscribe(res => {this.users = res});
  }
  //////////////////////////////////****Code to select Particular organization & to select the user id****///////////////////////////////////////////////////////////
  selectChangeHandlerOrg(event:any)
  {
    this.orgid = event.target.value;
    this.getAllUsers(this.orgid);
  }
  selectChangeHandler(event:any)
  {
    this.roleid = event.target.value;
  }
  selectChangeHandlerUser(event:any)
  {
    this.userid = event.target.value;
  }

}

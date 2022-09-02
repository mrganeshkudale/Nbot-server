import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { organization } from '../../Models/organization';
import { searchorganization } from '../../Models/searchorganization';

import { searchRoles } from '../../Models/searchRoles';
import { user } from '../../Models/user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: user = new user("","","","","","","");
  roleUrl:string = "http://localhost:8081/User/Role";
  message: any;
  roles:searchRoles[] = []; 
  orgs: searchorganization[] = [];
  orgURL: string = "http://localhost:8084/organisation";
  roleid:string = "";
  orgId:string = "";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getRoles();
    this.getOrganisations();
  }

  sendAlert():void {
    alert("User Added Sucessfully. Thank you");
  }
  public addNow()
  {
    this.user.id = uuid.v4();
    this.user.orgId = this.orgId;
    this.user.usrRole = this.roleid;
    let response = this.addUser(this.user);
    this.sendAlert()
    response.unsubscribe();
  }
  public addUser(user:user)
  {
    
    return this.http.post<user>("http://localhost:8081/User",user,{responseType:'text' as 'json'}).subscribe(res => {this.user = res});
    
  }
  public getRoles()
  {
    this.http.get<searchRoles[]>(this.roleUrl).subscribe(res => {this.roles = res}); 
  }
  public getOrganisations()
  {
    
    this.http.get<organization[]>(this.orgURL).subscribe(res => {this.orgs = res});
  }
  selectChangeHandler(event:any)
  {
    this.roleid = event.target.value;
  }
  selectChangeHandlerOrg(event:any)
  {
    this.orgId = event.target.value;
  }

}

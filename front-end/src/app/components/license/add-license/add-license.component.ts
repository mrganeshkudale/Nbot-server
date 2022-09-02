import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { license } from '../../Models/license';
import { searchorganization } from '../../Models/searchorganization';
import { searchUser } from '../../Models/searchUser';
import { LicenseService } from '../../services/license/license.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent implements OnInit {

  orgid: string = "";
  userid: string = "";
  orgs:searchorganization[] = [];
  users:searchUser[] = [];
  license: license = new license("","","",false);
  constructor(private http:HttpClient,private licenseService:LicenseService) { }

  ngOnInit(): void {
    this.getAllOrgs();
  }
  selectChangeHandlerOrg(event:any)
  {
    this.orgid = event.target.value;
    this.getAllUsers(this.orgid);
  }
  selectChangeHandlerUser(event:any)
  {
    this.userid = event.target.value;
  }
  public getAllOrgs()
  {
    this.http.get<searchorganization[]>("http://localhost:8084/organisation").subscribe(res => {this.orgs = res});
  }
  public getAllUsers(orgid:string)
  {
    this.http.get<searchUser[]>(`http://localhost:8081/User/Org/${orgid}`).subscribe(res => {this.users = res});
  }

  public addLicense()
  {
    this.license.orgId = this.orgid;
    this.license.userId = this.userid;
    this.license.licenseId = uuid.v4();
    let response = this.licenseService.doAddLicense(this.license);
  }

}

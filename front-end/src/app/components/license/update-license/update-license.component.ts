import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { license } from '../../Models/license';
import { searchLicenses } from '../../Models/searchLicenses';
import { searchorganization } from '../../Models/searchorganization';
import { searchUser } from '../../Models/searchUser';
import { LicenseService } from '../../services/license/license.service';

@Component({
  selector: 'app-update-license',
  templateUrl: './update-license.component.html',
  styleUrls: ['./update-license.component.css']
})
export class UpdateLicenseComponent implements OnInit {

  orgid : string = "";
  userid : string = "";
  orgs: searchorganization[] = [];
  users: searchUser[] = [];
  licenseId: string = "";
  licenseUrl: string = "http://localhost:8082/License/Org";
  licenses: searchLicenses[] = [];
  license: license = new license("","","",false);
  message:any;
  constructor(private http:HttpClient,private licenseService:LicenseService)
  {
  }
  ngOnInit(): void {
    this.getAllOrgs();
  }
  selectChangeHandlerOrg(event:any)
  {
    this.orgid = event.target.value;
    this.getAllUsers(this.orgid);
    this.getAllLicensesByOrgId(this.orgid);
  }
  selectChangeHandlerUser(event:any)
  {
    this.userid = event.target.value;
    console.log(this.userid);
   
  }
  selectChangeHandlerLicense(event:any)
  {
    this.licenseId = event.target.value;
    
  }
  getAllLicensesByOrgId(orgid: string) 
  {
    this.http.get<searchLicenses[]>(`http://localhost:8082/License/Org/${orgid}`).subscribe(res => {this.licenses = res
    console.log(this.licenses)});
  }
  public getAllOrgs()
  {
    this.http.get<searchorganization[]>("http://localhost:8084/organisation").subscribe(res => {this.orgs = res});
  }
  public getAllUsers(orgid:string)
  {
    this.http.get<searchUser[]>(`http://localhost:8081/User/Org/${orgid}`).subscribe(res => {this.users = res});
  }
  public updateNow()
  {
    this.license.orgId = this.orgid;
    this.license.userId = this.userid;
    this.license.licenseId = this.licenseId;
    let response = this.licenseService.updateLicense(this.license);
    response.subscribe((data)=>{this.message=data
    console.log(this.message)
    
  });
    
  }
  
}

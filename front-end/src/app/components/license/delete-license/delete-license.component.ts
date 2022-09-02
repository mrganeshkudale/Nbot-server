import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchLicenses } from '../../Models/searchLicenses';
import { searchorganization } from '../../Models/searchorganization';

@Component({
  selector: 'app-delete-license',
  templateUrl: './delete-license.component.html',
  styleUrls: ['./delete-license.component.css']
})
export class DeleteLicenseComponent implements OnInit {

  constructor(private http:HttpClient) { }
  orgs : searchorganization[] = [];
  orgid:string= "";
  licenseId:string = "";
  licenseUrl:string = "http://localhost:8082/License/Org";
  licenses:searchLicenses[] = [];
  isSuccess:any;
  ngOnInit(): void {
    this.getAllOrgs();
  }
  public getAllOrgs()
  {
    this.http.get<searchorganization[]>("http://localhost:8084/organisation").subscribe(res => {this.orgs = res});
  }
  selectChangeHandlerOrg(event:any)
  {
    this.orgid = event.target.value;
    this.getAllLicensesByorgId(this.orgid);
  }
  getAllLicensesByorgId(orgid: string) {
    this.http.get<searchLicenses[]>(`${this.licenseUrl}/${orgid}`).subscribe(res => {this.licenses = res
    console.log(res)});
  }
  selectChangeHandlerLicense(event:any)
  {
    this.licenseId = event.target.value;
    
  }
  deleteLicense()
  {
    this.http.delete(`http://localhost:8082/License/${this.licenseId}`).subscribe(res => {this.isSuccess = res 
    console.log(this.isSuccess)
    if(this.isSuccess)
  {
    alert("The License Deleted Successfully")
  }
else
  {
    alert("The License cannot be deleted")
  }  
})
  }

}

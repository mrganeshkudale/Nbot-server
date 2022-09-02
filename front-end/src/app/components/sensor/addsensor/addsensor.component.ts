import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import * as uuid from 'uuid';
import { User } from '../../user/registration/user';
import { Sensor } from '../../Models/Sensor';
import { SensorService } from '../../services/sensor/sensor.service';
import { searchorganization } from '../../Models/searchorganization';
import { organization } from '../../Models/organization';
import { searchUser } from '../../Models/searchUser';
import { searchLicenses } from '../../Models/searchLicenses';

@Component({
  selector: 'app-addsensor',
  templateUrl: './addsensor.component.html',
  styleUrls: ['./addsensor.component.css']
})
export class AddsensorComponent implements OnInit {

  user: User = new User("","","","");
  sensor: Sensor= new Sensor("","","","",false,"","");
  orgs: searchorganization[] = [];
  org: organization = new organization("","",false,"");
  message: any;
  orgURL: string = "http://localhost:8084/organisation";
  addSensorForm:any;
  orgid: string = "";
  users:searchUser[] = [];
  usrUrl: string = "http://localhost:8081/User/Org";
  userId:string = "";
  licenseId:string = "";
  licenses: searchLicenses[] = [];
  licenseUrl: string = "http://localhost:8082/License/Org";
  roleId:any ;
  constructor(private http:HttpClient,private sensorservice:SensorService) { }

  ngOnInit(): void {
    this.roleId = sessionStorage.getItem('roleId');
    this.getOrganisations();
  }

  sendAlert(message:any):void {
    alert(message);

  }
  public addSensor()
  {
    this.sensor.userId = this.userId;
    this.sensor.orgId = this.orgid;
    this.sensor.licenseId = this.licenseId;
    this.sensor.id = uuid.v4();
    let response = this.sensorservice.doAddSensor(this.sensor);
    
  }
  public getOrganisations()
  {
    
    this.http.get<organization[]>(this.orgURL).subscribe(res => {this.orgs = res});
    
        
  }
  public getAllUserByOrgId(orgid: string)
  {
    console.log(orgid);
    this.http.get<searchUser[]>(`${this.usrUrl}/${orgid}`).subscribe(res => {this.users = res
    console.log(this.users)});
  }
  public getAllLicensesByOrgId(orgid:string)
  {
    this.http.get<searchLicenses[]>(`${this.licenseUrl}/${orgid}`).subscribe(res => {this.licenses = res});
  }
  
  selectChangeHandler(event:any)
  {
    this.orgid = event.target.value;
    this.getAllUserByOrgId(this.orgid);
    this.getAllLicensesByOrgId(this.orgid);

  }
  selectChangeHandlerUser(event:any)
  {
   this.userId = event.target.value;
  }
  selectChangeHandlerLicense(event:any)
  {
   this.licenseId = event.target.value;
  }
}


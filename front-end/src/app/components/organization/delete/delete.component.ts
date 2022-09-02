import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { organization } from '../../Models/organization';
import { searchorganization } from '../../Models/searchorganization';
import { Sensor } from '../../Models/Sensor';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  org: organization = new organization("","",false,"");
  baseURL="http://localhost:8084/organisation"
  id: string ="";
  sensor: Sensor= new Sensor("","","","",false,"","");
  message: any;
  orgs: searchorganization[] = [];
  orgid: string = "";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllOrgs();
  }
  sendAlert(message:any):void {
    alert(message);
  }
  public deleteNow()
  {
    
    let response = this.doDeletion(this.orgid);
    response.subscribe((data)=>{this.message=data
    if(this.message == true)
    {
      this.sendAlert("The Organization is Deleted Successfully");
    }
    else {    
      this.sendAlert("The Organization is not Deleted / Already Deleted");
    }
      
    });
    
  }
  public doDeletion(orgid:string)
  {
    
    return this.http.delete(`${this.baseURL}/${orgid}`);
    
  }
  public getAllOrgs()
  {
    this.http.get<searchorganization[]>("http://localhost:8084/organisation").subscribe(res => {this.orgs = res});
  }
  selectChangeHandlerOrg(event:any)
  {
    this.orgid = event.target.value;
   
  }
}
